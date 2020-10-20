import { Component, OnInit } from '@angular/core';
import { QuoteTypeManagerService } from '../quote-type-manager/quote-type-manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login/login.service';
import { CreateQuoteTypeService } from './create-quote-type.service';

@Component({
  selector: 'app-create-quote-type',
  templateUrl: './create-quote-type.component.html',
  styleUrls: ['./create-quote-type.component.scss']
})
export class CreateQuoteTypeComponent implements OnInit {

  public userId: any;
  public userDetails: any;
  public userData: any = {};


  constructor(
    private quoteTypeManagerService: QuoteTypeManagerService,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private quoteSerice: CreateQuoteTypeService
  ) { }

  public quoteType: any = {
    quote_type_name: '',
    description: '',
    notes: ''
  };
  public quoteTypeId: string;

  ngOnInit(): void {
    this.getUserById();
    this.route.params.subscribe(params => {
      this.quoteTypeId = params.id;
    });
    if (this.quoteTypeId) {
      this.getQuoteType();
    }
  }

  public getUserById() {
     this.userId = sessionStorage.getItem('Id');
     if (this.userId) {
       this.loginService.getLoginUserId(this.userId).subscribe(res => {
         this.userDetails = res['body'];
         this.userData = {
           org: this.userDetails.org,
           org_country: this.userDetails.org_country,
           org_sub1: this.userDetails.org_sub1,
           org_sub2: this.userDetails.org_sub2,
           org_sub3: this.userDetails.org_sub3,
         };
       });
      }
   }

  public getQuoteType(){
    this.quoteTypeManagerService.getQuoteTypeById(this.quoteTypeId).subscribe(res => {
      if (res) {
        this.quoteType = res.body;
      }
    }, (error => {
    }));
  }

  save() {
    const tempData = {
      quote_type_name: this.quoteType.quote_type_name,
      description: this.quoteType.description,
      notes: this.quoteType.notes,
      primary_calculation_id: '16bZu2844sbf991',
      primary_template_id: '16bf2128994sbf10',
      org: this.userData.org,
      org_country: this.userData.org_country,
      org_sub1: this.userData.org_sub1,
      org_sub2: this.userData.org_sub2,
      org_sub3: this.userData.org_sub3,
      created_by: 'dacastillo33',
      created_date: '2020-05-10',
      update_by: 'dcastillo33',
      updated_by_date: '2020-05-10',
      calculationids: ['16bZu2844sbf991', '16bZu2844xVf43'],
      templateids: ['16bZu2844sbf991', '16bZu2844xVf43'],
      endpoint_base_url: '',
      operation_urls: []
    };
    this.quoteTypeManagerService.createNewQuoteType(tempData).subscribe(res => {
      if (res) {
        this.quoteType = res.body;
        this.router.navigate(['quote-type-manager']);
      }
    }, (error => {
      console.log(error);
    }));
  }

  update() {
    this.quoteTypeManagerService.updateQuoteType(this.quoteType).subscribe(res => {
      if (res){
        this.getQuoteType();
      }
    }, (error => {
      console.log('error---update---->>', error);
    }));
    this.router.navigate(['quote-type-manager']);

  }

  cancel() {
    this.router.navigate(['quote-type-manager']);
  }

  next() {
    const quoteString = JSON.stringify(this.quoteType);
    this.quoteSerice.changeMessage(quoteString);
    this.router.navigate(['quote-entity']);
  }

}
