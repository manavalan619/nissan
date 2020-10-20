import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AccessServiceService} from '../../shared/access-service/access-service.service';
import {ReviewService} from './review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

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

  constructor(private router:Router,
    private access: AccessServiceService,
    private review: ReviewService) { }

  ngOnInit(): void {
    this.access.currentMessage.subscribe(data => {
      this.user = data;
    })
  }

  submit() {
    this.review.save(this.user).subscribe(response => {
      console.log('response', response);
    })
  }

}
