import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { ValueParserParams } from 'ag-grid-community';
import { QuoteTypeEntityService } from './quote-type-entity.service';
import { CreateQuoteTypeService } from '../create-quote-type.service';

@Component({
  selector: 'app-quote-type-entity',
  templateUrl: './quote-type-entity.component.html',
  styleUrls: ['./quote-type-entity.component.scss']
})
export class QuoteTypeEntityComponent implements OnInit {

  public gridApi;
  public gridColumnApi;
  public quoteType: any;
  public entityId;

  public columnDefs;
  public rowData;
  public rowSelection;
  defaultColDef: { editable: boolean; sortable: boolean; filter: boolean; };
  frameworkComponents: { buttonRenderer: any; };
  public getEntityTypeValue: any[] = ['Text', 'Number', 'String', 'Boolean', 'Entity'];
  public entity = {
    Entity_name: '',
    entity_type: 'Entity',
    created_by: '',
    quote_type_id: '',
    quote_type_name: '',
    updated_at: new Date(),
    field: []
  };
  public singleClickEdit = true;
  public currentEntityId;
  public editedProp;
  public isValid = true;
  // public entity: any;
  allEntity: [];
  selectCellRenderedValue;
  currentRowData: any;
  selectedCellRowIndex: any;
  EnteredReserveWord;
  projectId: any;
  propertyPopup = 'none';
  propertiesIsExist = false;
  featureId: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private entityService: QuoteTypeEntityService,
    private quoteService: CreateQuoteTypeService
  ) { }

  ngOnInit(): void {
    this.agGridInitialization();
  }
  agGridInitialization() {
    this.columnDefs = [
      {
        headerName: 'Name',
        field: 'name',
        width: 250,
        valueSetter: '',
      },
      {
        headerName: 'Type',
        field: 'type_name',
        width: 308,
        cellEditor: 'agSelectCellEditor',
        // singleClickEdit: true,
        valueSetter: '',
        cellEditorParams: {
          values: this.getEntityTypeValue,
        },
      },
      {
        headerName: 'Description',
        field: 'description',
        width: 450,
      }
    ];
    this.rowData = [
      {
        name: 'Enter_Name',
        type_name: 'Text',
        data_type: null,
        description: 'Description',
        is_entity_type: false,
        is_list_type: false,
        list_type: null,
        list_value: null,
        entity_id: null
      }
    ];
    this.defaultColDef = {
      editable: true,
      sortable: true,
      filter: true
    };
  }

  closeModel() {

  }

  cancel() {
    this.router.navigate(['new-quote-type']);
  }

  save() {
    this.quoteService.currentMessage.subscribe(data => {
      console.log('data', data);
      this.quoteType = data;
    });
    const quoteData = JSON.parse(this.quoteType);
    this.entity.quote_type_id = quoteData._id;
    this.entity.quote_type_name = quoteData.quote_type_name;
    this.entity.field = this.getRowData();
    console.log('fields', this.entity.field);
    if (this.entity.Entity_name && this.entity.field.length > 0) {
      this.entityService.createEntity(this.entity).subscribe(response => {
        console.log('response', response);
        this.entityId = response.body.Entity_id;
      });
    }

  }

  update() {}

  removeRow(e) {
    const rows = e.rowData;
    const selectedData = [
      rows
    ];
    const res = this.gridApi.updateRowData({ remove: selectedData });
  }

  onAddRow() {
    const newItem = this.createNewRowData();
    const res = this.gridApi.updateRowData({ add: [newItem] });
  }

  onCellValueChanged(data) {

  }

  getRowData() {
    const rowData = [];
    this.gridApi.forEachNode((node) => {
      rowData.push(node.data);
    });
    return rowData;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.gridColumnApi = params.columnApi;
  }

  createNewRowData() {
    const newData = {
      name: 'Enter_Name',
      type_name: 'Text',
      data_type: null,
      description: 'Description',
      is_entitytype: false,
      is_listtype: false,
      list_type: null,
      list_value: null,
      entity_id: null
    };
    return newData;
  }

}
