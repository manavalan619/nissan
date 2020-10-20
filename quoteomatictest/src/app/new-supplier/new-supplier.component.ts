import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DealerServiceService} from '../../shared/dealer-service/dealer-service.service';
import {LoginDataService} from '../../shared/login-service/login-service';
import {FormService} from '../form/form.service';

@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styleUrls: ['./new-supplier.component.scss']
})
export class NewSupplierComponent implements OnInit {

  public incidentNumber;
  public action;
  public sysId;
  public user: any = {
    personal_title: 'Personal Title',
    first_name: '',
    last_name: '',
    employee_type: '',
    employee_position: 'Employee Position',
    email: '',
    supplier_code: '',
    territory: '',
    phone: '',
    fax: '',
    partner_description: '',
    address_1: '',
    address_2: '',
    address_3: '',
    county: '',
    zipcode: '',
    country_iso_code: 'Country ISO Code',
    language_iso_code: 'Language ISO Code',
    application_access: ''
  }

  constructor(
    private router: Router,
    private dealerService: DealerServiceService,
    private loginDataService: LoginDataService,
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    let userDetails: any;
    this.loginDataService.currentMessage.subscribe(data =>{
      userDetails = data['Userdetails'];
      this.user.first_name = userDetails.body.firstname;
      this.user.email = userDetails.body.email;
      this.user.last_name = userDetails.body.lastname;
    })
  }

  submit() {
    this.formService.save(this.user).subscribe(response => {
      if(response.body.number) {
        console.log('response', response)
        this.sysId = response.body.sys_id;
        this.action = 'created';
        this.incidentNumber = response.body.number;
        document.getElementById('openModalButton').click();
      }
    })
  }

  update() {
    this.formService.update(this.sysId, this.user).subscribe(response => {
      if(response.body.number) {
        console.log('response', response)
        this.sysId = response.body.sys_id;
        this.action = 'updated';
        this.incidentNumber = response.body.number;
        document.getElementById('openModalButton').click();
      }
    })
  }

  delete() {
    this.formService.delete(this.sysId).subscribe(response => {
      console.log('response', response)
      this.action = 'deleted';
      this.user ={};
      this.sysId = '';
      document.getElementById('openModalButton').click();
    })
  }

  cancel() {
    this.router.navigate(['home']);
  }

}
