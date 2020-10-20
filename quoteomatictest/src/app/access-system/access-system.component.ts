import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DealerServiceService} from '../../shared/dealer-service/dealer-service.service';
import {AccessServiceService} from '../../shared/access-service/access-service.service'

@Component({
  selector: 'app-access-system',
  templateUrl: './access-system.component.html',
  styleUrls: ['./access-system.component.scss']
})
export class AccessSystemComponent implements OnInit {

  public user: any = {
    personal_title: '',
    first_name: '',
    last_name: '',
    employee_type: '',
    employee_position: '',
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
    country_iso_code: '',
    language_iso_code: '',
    application_access: ''
  }

  constructor(private router: Router,
    private dealerService: DealerServiceService,
    private access: AccessServiceService) { }

  ngOnInit(): void {
    this.dealerService.currentMessage.subscribe(data =>{
      this.user = data;
    })
  }

  preview() {
    this.access.changeMessage(this.user);
    this.router.navigate(['review']);
  }

}
