import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {DealerServiceService} from '../../shared/dealer-service/dealer-service.service';
import {LoginDataService} from '../../shared/login-service/login-service';
import {FormService} from '../form/form.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-new-dealer',
  templateUrl: './new-dealer.component.html',
  styleUrls: ['./new-dealer.component.scss']
})
export class NewDealerComponent implements OnInit {

  public personalTitles = ['Dealer', 'Supplier'];
  public employeePosition = ['Developer', 'Supplier', 'Manager', 'Admin', 'Dealer'];
  public landuageCode = ['en', 'tam', 'es'];
  public countryISOCode = ['US', 'UAE', 'IND'];
  public States = ['New', 'In Progress', 'On Hold', 'Resolved', 'Closed', 'Cancelled'];
  public incidentNumber;
  public action;
  public state;
  public contactType;
  public Callers = [];
  public AssignmentGroups = [];
  public urgency;
  public sysId;
  public user: any = {
    User_ID:'',
    personal_title: 'Personal Title',
    firstname: '',
    lastname: '',
    employee_type: 'Assignment Group',
    employee_position: 'Contact Type',
    email: '',
    supplier_code: '',
    territory: '',
    phonenumber: '',
    faxnumber: '',
    partner_description: '',
    caller_id: 'Caller',
    urgency: 'Urgency',
    state: 'State',
    country: '',
    zipcode: '',
    country_iso_code: 'Country ISO Code',
    language_iso_code: 'Language ISO Code',
    application_access: ''
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dealerService: DealerServiceService,
    private loginDataService: LoginDataService,
    private formService: FormService,
    private SpinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllAssignmentGroups();
    this.user.User_ID = sessionStorage.getItem('Id');
    this.route.params.subscribe(params => {
      this.sysId = params.sys_id;
    });
    if(!this.sysId) {
      this.getData();
    }
    else {
      this.getIncidentbyId();
    }
  }

  getAllUsers() {
    this.SpinnerService.show();
    this.formService.getAllUsers().subscribe(users => {
      this.Callers = users.body;
      this.SpinnerService.hide();
    })
  }

  getAllAssignmentGroups() {
    this.SpinnerService.show();
    this.formService.getAllAssignmentGroups().subscribe(users => {
      this.AssignmentGroups = users.body;
      this.SpinnerService.hide();
    })
  }

  getData() {
    let userDetails: any;
    this.loginDataService.currentMessage.subscribe(data =>{
      if(data['Userdetails']) {
        // userDetails = data['Userdetails'];
        // this.user = userDetails.body;
      }
    })
  }

  getIncidentbyId() {
    this.SpinnerService.show();
    this.formService.get(this.sysId).subscribe(response => {
      console.log('responsed data', response.body);
      this.incidentNumber = response.body.number;
      this.user.partner_description = response.body.short_description;
      this.urgency = response.body.urgency;
      this.state = response.body.state;
      this.user.employee_type = response.body.assignment_group.value;
      this.user.caller_id = response.body.caller_id.value;
      this.contactType = response.body.contact_type;
      this.SpinnerService.hide();
    })
  }

  submit() {
    this.user.User_ID = sessionStorage.getItem('Id');
    this.formService.save(this.user).subscribe(response => {
      if(response.body.number) {
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
    this.formService.deleteIncident(this.sysId, this.user.User_ID).subscribe(response => {
      console.log('response', response)
      this.action = 'deleted';
      this.user ={};
      this.sysId = '';
      this.incidentNumber = '';
      document.getElementById('openModalButton').click();
    })
  }

  cancel() {
    this.router.navigate(['ticket-screen/ticket-list']);
  }

}
