import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/shared/dataService/data-service.service';
import { QuoteServiceService } from 'src/shared/quoteService/quote-service.service';

import { Router } from '@angular/router';
import { NewQuoteService } from './newquote.service';
@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.component.html',
  styleUrls: ['./newquote.component.scss']
})
export class NewquoteComponent implements OnInit {

  // public quote: any;
  edit;
  public ContractDuration: any[];
  public quoteTypeId;
  public quoteTypeName;
  public grossProfitPercent;
  public tssavpCoverage;
  public contractDuration;
  price = 0;
  cost = '0';

  public quote: any = {
    Contract_Duration: '',
    Cost: '',
    Cost_per_Flex_Hour: '',
    Country_Rates: '',
    Flex_Hours: '',
    Offering_Program: '',
    Optional_Prepared_By: '',
    Price: '',
    Prop_Valid_Date: '',
    Proposal_Gross_Profit_Percent: '',
    Start_Date: '',
    TSS_AVP_Coverage: '',
    Coverage_percent: '',
    calculation_id: '',
    client_name: '',
    created_by: '',
    created_date: '',
    description: '',
    generated_doc_id: '',
    id: '',
    notes: '',
    org: '',
    org_country: '',
    org_sub1: '',
    org_sub2: '',
    org_sub3: '',
    quote_name: '',
    quote_type_id: '',
    quote_type_name: '',
    template_id: '',
    update_by: '',
    updated_by_date: '',
  };

  constructor(
    private dataService: DataServiceService,
    private router: Router,
    private newQuoteService: NewQuoteService,
    private quoteService: QuoteServiceService
  ) {
    this.edit = this.router.getCurrentNavigation().extras?.state?.edit;
  }

  ngOnInit(): void {
    this.getQuoteTypeId();
    this.dataService.currentMessage.subscribe(data => {
      if (data !== 'default message' && this.edit === 'true') {
        this.quote = data;
      }
    });
  }

  getQuoteTypeId() {
    const quoteData = JSON.parse(localStorage.getItem('data'));
    this.quoteTypeId = quoteData._id;
    this.quoteTypeName = quoteData.quote_type_name;
  }

  exit() {
    this.router.navigate(['home']);
  }

  calculate() {

    if (this.quote.Proposal_Gross_Profit_Percent && this.quote.Contract_Duration && this.quote.TSS_AVP_Coverage_percent) {
      const grossProfit = this.quote.Proposal_Gross_Profit_Percent.match(/\d+/g);
      this.grossProfitPercent = grossProfit[0] / 100;
      const coveragePercent = this.quote.TSS_AVP_Coverage_percent.match(/\d+/g);
      this.tssavpCoverage = coveragePercent[0] / 100;
      const contractDuration = this.quote.Contract_Duration.match(/\d+/g);
      this.contractDuration = contractDuration[0];
    }
    const body = {
      quote_type_id: this.quoteTypeId,
      Country_Rates: this.quote.Country_Rates,
      value: {
        IBMTSSAVP: {
          Contract_Duration: this.contractDuration,
          Cost_per_Flex_Hour: this.quote.Cost_per_Flex_Hour,
          Flex_Hours: this.quote.Flex_Hours,
          Proposal_Gross_Profit_Percent: this.grossProfitPercent,
          TSS_AVP_Coverage: this.quote.TSS_AVP_Coverage,
          TSS_AVP_Coverage_percent: this.tssavpCoverage
        }
      }
    };
    this.newQuoteService.calculate(body).subscribe(data => {
      this.price = data.body.body.body.body.result ? data.body.body.body.body.result : 0;
      const cost = data.body.body.body.body.cost_result ? data.body.body.body.body.cost_result : 0;
      this.cost = '$' + cost.toString();
    });
  }

  generate(){
    this.quoteService.changeMessage(this.quoteTypeName);
    const body = {
      quote_type_id: this.quoteTypeId,
      quote_type_name: this.quoteTypeName,
      Country_Rates: this.quote.Country_Rates,
      client_name: this.quote.client_name,
      Start_Date: this.quote.Start_Date,
      Contract_Duration: this.quote.Contract_Duration,
      Flex_Hours: this.quote.Flex_Hours,
      Prop_Valid_Date: this.quote.Prop_Valid_Date,
      Cost_per_Flex_Hour: this.quote.Cost_per_Flex_Hour,
      Proposal_Gross_Profit_Percent: this.quote.Proposal_Gross_Profit_Percent,
      TSS_AVP_Coverage: this.quote.TSS_AVP_Coverage,
      Coverage_percent: this.quote.Coverage_percent,
      Optional_Prepared_By: this.quote.Optional_Prepared_By,
      Price: this.price
    };
    this.newQuoteService.generate(body).subscribe(data => {
      console.log('-----generatedata----->', data.body.body.body.body.body);
      const quotestring = JSON.stringify(data.body.body.body.body.body);
      this.dataService.changeMessage(quotestring);
    });
    this.router.navigate(['/quote-generate']);

  }




}
