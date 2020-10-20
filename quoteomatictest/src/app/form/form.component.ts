import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DealerServiceService} from '../../shared/dealer-service/dealer-service.service';
import {FormService} from  './form.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public incidentNumber;
  public sysId;
  public data;

  public ticket: any = {
    caller_id: '',
    contact_type: '',
    category: '',
    state: '',
    subcategory: '',
    short_description: '',
    description: '',
    service: '',
    cmdb_ci: '',
    impact: '',
    urgency: '',
    assignment_group: '',
    assigned_to: ''
  }

  constructor(
    private router: Router,
    private dealerService: DealerServiceService,
    private formService: FormService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.formService.save(this.ticket).subscribe(response => {
      console.log('response', response.body);
      this.data = response.body;
      this.incidentNumber = response.body.number;
      this.sysId = response.body.sys_id;
    })
  }

  update() {
    this.formService.update(this.sysId, this.ticket).subscribe(updatedRes =>{
      if(updatedRes) {
        this.toastr.success('updated');
      }
    })
  }

  delete() {
    this.formService.delete(this.sysId).subscribe(deletedResponse => {
      if(deletedResponse) {
        this.toastr.success('deleted');
      }
    })
  }

  cancel() {
    this.router.navigate(['home']);
  }
}
