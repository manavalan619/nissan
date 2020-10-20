import { Component, OnInit } from '@angular/core';
import { DataToDocService } from './data-to-doc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-to-doc',
  templateUrl: './data-to-doc.component.html',
  styleUrls: ['./data-to-doc.component.scss']
})
export class DataToDocComponent implements OnInit {

  public template = [];

  constructor(private dataToService: DataToDocService, private router: Router
    ) { }

  ngOnInit(): void {
    this.GpGetAllvalues();
    this.GpGetAllvalues();
  }
  GpGetAllvalues() {
    this.dataToService.getAllData().subscribe(templateResponse => {
      this.template = templateResponse.body;
    },
      error => {
        console.error('Could not get response because of this ', error);
      }
    );
  }
  newTemplate() {
    this.router.navigate(['/ck-editor']);

  }

  templateEdit(item) {
    this.router.navigate([`/ck-editor`, {id: item._id}]);
  }
}
