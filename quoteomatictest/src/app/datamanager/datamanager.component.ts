import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-datamanager',
  templateUrl: './datamanager.component.html',
  styleUrls: ['./datamanager.component.scss']
})
export class DatamanagerComponent implements OnInit {
  @ViewChild('myInput')
  myInputVariable: ElementRef;
  displayModel = 'none';
  displayImportModel = 'none';
  fileToUpload: File = null;
  createProject: FormGroup;
  public uploader: FileUploader = new FileUploader({
    url: '',
  });

  constructor() { }

  ngOnInit(): void {
    this.uploader.onBeforeUploadItem = (item) => {
      item.url = 'http://localhost:3055/datamanager/upload';
    };

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    };
  }

  openModal() {
    this.displayModel = 'block';
  }

  openImportModal() {
    this.displayImportModel = 'block';
  }

  closeImportModal() {
    this.displayImportModel = 'none';
    this.myInputVariable.nativeElement.value = '';
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

}
