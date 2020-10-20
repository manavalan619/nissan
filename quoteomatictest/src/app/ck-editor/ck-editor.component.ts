import { Component, OnInit } from '@angular/core';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CkEditorService } from './ck-editor.service';
import * as Editor from '../../assets/build/ckeditor';
import { Router } from '@angular/router';


import { element } from 'protractor';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-ck-editor',
  templateUrl: './ck-editor.component.html',
  styleUrls: ['./ck-editor.component.scss']
})
export class CkEditorComponent implements OnInit {


  public Editor = Editor;
  public templateId: string;
  public eventName = 'IBM - EVENT';
  // public Editor = ClassicEditor;
  public text = 'Welcome Letter';
  public name = 'IBM Developer';
  public venue = 'venue';
  public templateArray = [];
  public savedTemplateId;
  public templateName;
  public descriptionDetails;
  public editor: any;
  user: any;

  public model = {
    editorData: ''
  };
  placeHolderData: any = [
    'Company_Address_1',
    'Company_Address_2',
    'Company_City', 'State_ZIP',
    'Company_Country',
    'Company_Name',
    'Contract_Duration',
    'Start_Date',
    'End_Date',
    'Estimated_Price',
    'Client_Legal_Name',
    'Sched_Effective_Date',
    'Country_Rates',
    'Flex_Hours',
    'Cost_per_Flex_Hour',
    'Proposal_Gross_Profit_Percent',
    'TSS_AVP_Coverage',
    'Coverage_percent',
    'Optional_Prepared_By'
  ];
  documentResponse: any;

  constructor(
    private ckService: CkEditorService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.ckService.getQuoteManager().subscribe(res => {
      if (res) {
        console.log('response-----getQuoteManager->>>>', res.body.body.quote_type_name);
      }
    }, (error => {
      console.log('error----->>>>', error);
    }));
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.templateId = params.id;
    });
    if (this.templateId) {
      this.ckService.getTempateById(this.templateId).subscribe((res) => {
        this.documentResponse = res.body;
        this.templateName = res.body.name;
        this.descriptionDetails = res.body.description;
        res.body.template_document.forEach(templateData => {
          this.model.editorData = templateData;
        });
        // res.body.placeHolder_fields.forEach(element => {
        //   this.placeHolderData.push(element);
        // });
        this.placeHolderData = res.body.placeHolder_fields;
        if (this.placeHolderData.length !== 0) {
          this.ckEditorIntialize();
        }
      });
    }
    else {
      this.ckEditorIntialize();
    }

  }

  public ckEditorIntialize() {
    this.Editor.create(document.querySelector('#editor'), {
      placeholderConfig: {
        types: this.placeHolderData
      }
    }).then(neweditor => {
      this.editor = neweditor;
      this.editor.setData(this.documentResponse.template_document[0]);

    }).catch(error => {
    });
  }

  Onsubmit() {
    const editorData = this.editor.getData();
  }
  OnInsert() {
    this.editor.setData(this.user);
  }

  public onChange({ editor }: any) {
    const data = editor.getData();
    this.model.editorData = data;
  }

  send() {
    const data = {
      file: this.model.editorData
    };
    // tslint:disable-next-line: no-shadowed-variable
    this.ckService.createPDF(data).subscribe((data) => {
    });
  }
  cancel() {
    this.router.navigate(['/data-to-doc']);
  }
  save() {
    this.templateArray.push(this.editor.getData());
    const data = {
      name: this.templateName,
      description: this.descriptionDetails,
      notes: 'this is meant to be a much longer area to enter free form information',
      org: '@ibm.com',
      org_country: 'US',
      org_sub1: 'GTS',
      org_sub2: 'AVP',
      org_sub3: 'EMEA',
      created_by: 'dacastillo33',
      created_date: '2020-05-10',
      updated_by: 'dcastillo33',
      updated_date: '2020-05-10',
      template_uploaded: 'Y',
      uploaded_original_filename: 'IBMAVPTSS Standard.docx',
      filename_on_disk: '16bfu2844sbf39_IBMAVPTSS Standard.docx',
      template_document: this.templateArray,
      placeHolder_fields: this.placeHolderData,
      dynamic_fields: [
        {
          field_name: 'formA.fld3',
          source_type: 'form',
          source_name: 'formA',
          key_name: 'fld3'
        },
        {
          field_name: 'formA.fld3',
          source_type: 'form',
          source_name: 'formA',
          key_name: 'fld3'
        },
        {
          field_name: 'formA.fld3',
          source_type: 'form',
          source_name: 'formA',
          key_name: 'fld3'
        }
      ]
    };
    this.ckService.saveData(data).subscribe(response => {
      this.savedTemplateId = response.body._id;
    });
    this.router.navigate(['/data-to-doc']);
  }
  updateTemplate() {
    const updateTemplateArray = [];
    updateTemplateArray.push(this.editor.getData());
    if (this.templateId) {
      this.savedTemplateId = this.templateId;
    }
    const data = {
      _id: this.savedTemplateId,
      name: this.templateName,
      description: this.descriptionDetails,
      template_document: updateTemplateArray,
    };
    this.ckService.updateData(data).subscribe(response => {
    });
    this.router.navigate(['/data-to-doc']);
  }

}
