import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ValueParserParams } from 'ag-grid-community';
import { CalculationService } from './calculation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalculationComponent implements OnInit {
  public data = {
    name: '',
    income_expression: '',
    cost_expression: ''
  };
  public calcName;
  public message;
  public exName = '(formdata.fld1 *(ds2.fld4+formdata.fld5))/datasource3.fld10';
  public columnDefs;
  public rowData = [];
  public gridApi;
  public animateRows = true;
  public gridColumnApi;
  public singleClickEdit = true;
  public rowItems = [];
  public object = {};
  public result;
  public sourceData = [];
  public sourceType = ['income', 'costs', 'additional fees', 'profit desired'];
  public fieldData = [];
  public tableData = [];
  public calculationId: any;
  public dataManager: any;
  public quoteTypeId = '76874jfiuy1278';

  selectCellRenderedValue = true;
  defaultColDef: { editable: boolean; sortable: boolean; filter: boolean; };
  frameworkComponents: { buttonRenderer: any; };

  constructor(private calcService: CalculationService, private router: Router , private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.calculationId = params.id;
      if (this.calculationId) {
        this.getCalculationById();
      }
    });
    // this.getData();
    this.getDataSource();
    this.agGridInitialization();
    // this.rowData.push({ data_source: "one", sourcetype: "two", field: "three" });
  }

  getDataSource() {
    this.calcService.getDataSource().subscribe(res => {
      console.log('response', res);
      if (res) {
        this.dataManager = res.body;
        res.body.forEach(data => {
          data.available_data.forEach(e => {
            if (e.type === 'form') {
              this.sourceData.push(e.name);
            }
            if (e.type === 'static file') {
              this.sourceData.push(e.original_file_name);
            }
            if (e.type === 'entity') {
              this.sourceData.push(e.entity_name);
            }
          });
        });
      }
    });
  }

  getCalculationById(){
    this.calcService.getById(this.calculationId).subscribe(res => {
      if (res){
        console.log('res', res);
        this.data = res.body;
        this.rowData = res.body.operand_sources;
        this.gridApi.setRowData(this.rowData);
      }
    });
  }

  

  agGridInitialization() {
    this.columnDefs = [
      {
        headerName: 'Data Source',
        cellEditor: 'agSelectCellEditor',
        field: 'data_source',
        editable: true,
        width: 150,
        valueSetter: this.sourceValueSetter.bind(this),
        cellEditorParams: {
          values: this.sourceData
        },
      },
      {
        headerName: 'Fields',
        cellEditor: 'agSelectCellEditor',
        field: 'field',
        editable: true,
        width: 150,
        valueSetter: this.fieldValueSetter.bind(this),
        cellEditorParams: (params) => {
          const editedValues = this.cellEditing(params);
          return {
            values: editedValues
          };
        },
      },
      {
        headerName: 'Type',
        cellEditor: 'agSelectCellEditor',
        field: 'sourcetype',
        editable: true,
        width: 150,
        valueSetter: this.typeValueSetter.bind(this),
        cellEditorParams: {
          values: this.sourceType
        },
      }
    ];
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.gridColumnApi = params.columnApi;
  }

  newRow() {
    this.rowData.push({ data_source: '', sourcetype: '', field: '' });
    this.gridApi.setRowData(this.rowData);
  }
  cellValueChanged(params) {
    console.log('cell value changed', params.data);
    if (params.data.data_source !== '' && params.data.field !== '' && params.data.sourcetype === 'income') {
      this.data.income_expression = this.data.income_expression + params.data.data_source + '.' + params.data.field;
    }

    if (params.data.data_source !== '' && params.data.field !== '' && params.data.sourcetype === 'costs') {
      this.data.cost_expression = this.data.cost_expression + params.data.data_source + '.' + params.data.field;
    }
  }

  typeValueSetter(params: ValueParserParams) {
    params.data.sourcetype = params.newValue;
    return true;
  }

  sourceValueSetter(params: ValueParserParams) {
    params.data.data_source = params.newValue;
    return true;
  }

  fieldValueSetter(params: ValueParserParams) {
    params.data.field = params.newValue;
    return true;
  }

  cellEditing(params) {

    const selectedResource = params.data.data_source;
    let fieldName = [];
    this.dataManager.forEach(data => {
      data.available_data.forEach(e => {
        if (selectedResource === e.name || selectedResource === e.original_file_name || selectedResource === e.entity_name ){
            fieldName = e.field_names;
        }
      });
    });
    return fieldName;
  }

  calculate(expression) {

  }
  save(data) {
    this.gridApi.forEachNode((node) => {
      const selectedResource = node.data.data_source;
      this.dataManager.available_data.forEach(e => {
        if (selectedResource === e.name || selectedResource === e.original_file_name || selectedResource === e.entity_name ){
          this.tableData.push({
            type: e.type,
            data_source: node.data.data_source,
            sourcetype: node.data.sourcetype, field: node.data.field
          });
        }
      });
    });
    const quoteData = JSON.parse(localStorage.getItem('data'));
    const quoteTypeId = quoteData._id;
    const quoteTypeName = quoteData.quote_type_name;
    console.log('quoteData', quoteData);
    const body = {
      name: data.name,
      description: 'sample description',
      notes: 'text or digital',
      quote_type_id: quoteTypeId,
      quote_type_name: quoteTypeName,
      org: 'maths',
      org_country: 'US',
      org_sub1: 'sub1',
      org_sub2: 'sub2',
      org_sub3: 'sub3',
      created_by: '21-05-2020',
      update_by: '21-05-2020',
      income_expression: data.income_expression,
      cost_expression: data.cost_expression,
      operand_sources: this.tableData
    };
    this.calcService.save(body).subscribe(response => {
    });
    this.router.navigate(['/calculation']);
  }

  update() {
    const updateTable = [];
    this.gridApi.forEachNode((node) => {
      updateTable.push({
        data_source: node.data.data_source,
        sourcetype: node.data.sourcetype, field: node.data.field
      });
    });
    const updateData = {
      _id: this.calculationId,
      name: this.data.name,
      income_expression: this.data.income_expression,
      cost_expression: this.data.cost_expression,
      operand_sources: updateTable
    };
    this.calcService.update(updateData).subscribe(res => {
      this.cancel();
    } , (error => {
      console.log('error------>>>>', error);
    }));
  }
  cancel() {
    this.router.navigate(['/calculation']);
  }


}
