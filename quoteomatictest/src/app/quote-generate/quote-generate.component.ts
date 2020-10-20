import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/shared/dataService/data-service.service';
import { QuoteServiceService } from 'src/shared/quoteService/quote-service.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { element } from 'protractor';
import * as Editor from '../../assets/build/ckeditor';

@Component({
  selector: 'app-quote-generate',
  templateUrl: './quote-generate.component.html',
  styleUrls: ['./quote-generate.component.scss']
})
export class QuoteGenerateComponent implements OnInit {

  public newdata: any;
  quoteresponse: any;
  public Editor = Editor;
  public editor: any;
  public quoteTypeName: any;



  constructor(
    private dataService: DataServiceService,
    private quoteService: QuoteServiceService
  ) { }

  ngOnInit(): void {
    this.quoteService.currentMessage.subscribe(data => {
      console.log('data of quote-type', data);
      this.quoteTypeName = data;
    });
    this.generate();
  }

  async generate(): Promise< any> {
    await new Promise<any>(resolve =>
      setTimeout(resolve, 500));
    return await this.ckEditorIntialize();
  }

  public ckEditorIntialize() {
    this.dataService.currentMessage.subscribe(dataoutput => {
      this.newdata = dataoutput;
      });
    this.Editor.create(document.querySelector('#editor'), {
      exportPdf: {
          stylesheets: ['EDITOR_STYLES'],
          fileName: `${this.quoteTypeName}`,
        }
    }).then(neweditor => {
      this.editor = neweditor;
      console.log("this.quoteresponse--->", this.newdata);
      this.editor.setData(this.newdata);

    }).catch(error => {
    });
  }

 


}
