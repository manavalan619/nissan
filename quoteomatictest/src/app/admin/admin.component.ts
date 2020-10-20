import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private adminservice: AdminService, private toastr: ToastrService, private spinnerservice: NgxSpinnerService) { }


  ngOnInit() {
  }

  Extractor() {
    this.spinnerservice.show();
    this.adminservice.CDNservice().subscribe(response => {
      console.log('----------response------', response);
      this.toastr.success('Pages has been Extracted', 'Acoustic Extractor', {timeOut: 3000});
      this.spinnerservice.hide();

    }, error => {
      console.error('------Error-----', error);
      this.spinnerservice.hide();
      this.toastr.error('Page Extraction Failed', 'Acoustic Extractor', {timeOut: 3000});

    });
  }
}
