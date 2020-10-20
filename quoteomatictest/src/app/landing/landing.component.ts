import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';





@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(

  ) { }


  sortorder: any;
  sortDate: any;
  public quote: any[] = [];

public events = [
    {
      event: 'Advancing global trade with blockchain',
      date: '2020-06-10',
      description: `This session looks beyond the initial blockchain use 
      case and pilot project to the real value to be gained from participating in blockchain 
      networks spanning industries and geographies`
    }, {
      event: 'Analytics-driven Storage Management',
      date: '2020-01-31',
      description: `As data volumes grow and grow in companies, the role of storage 
      experts has evolved into a generalist`
    }, {
      event: 'Journey to the Cloud Virtual Summit',
      date: '2020-08-14',
      description: `As data volumes grow and grow in companies, the role of storage 
      experts has evolved into a generalist`
    }, {
      event: 'Taking Your Work Virtual',
      date: '2020-09-04',
      description: `An urgent need to slow the spread of COVID-19 and protect employees forced 
        state and local agencies to rapidly implement remote work`
    }, {
      event: 'Cloud Strategy: Modernizing with Open Cloud Frameworks',
      date: '2021-06-09',
      description: `Join us in each of our 5-part education webinar series to hear about solutions of cloud strategy`
    }
  ]
  ngOnInit() {
    
        this.GpGetAllvalues();

  }



    GpGetAllvalues(){
        this.quote = this.events;
        let sortarray = [];
        this.sortorder = '';
        this.sortDate = '';
        if (this.sortDate == "last 7 days") {
          let diff = 7;
          let datediff = this.Datedifference(diff);
          let currentdate  = moment().format('YYYY-MM-DD');
          this.events.forEach(element=>{
              if(datediff < element.date && currentdate > element.date){
                  console.log('--------7-datediff----',element);
                  sortarray.push(element);
              }
          })
        }
        if (this.sortDate == "last 30 days") {
          let diff = 30;
          let datediff = this.Datedifference(diff);
          let currentdate  = moment().format('YYYY-MM-DD');
          this.events.forEach(element=>{
              if(currentdate > element.date){
                sortarray.push(element);
                console.log('--------30-datediff----',sortarray);
             }
          })
        }
        if (this.sortDate == "Future days") {
          let currentdate  = moment().format('YYYY-MM-DD');
          this.events.forEach(element=>{
              if(currentdate < element.date){
                  sortarray.push(element);
              }
          })
        }
        if (this.sortorder == 'Alphabetical ascending') {
          sortarray.sort((a, b) => a.event > b.event ? 1 : -1);
        }
        if (this.sortorder == 'Alphabetical deascending') {
          sortarray.sort((a, b) => a.event > b.event ? -1 : 1);
        }
        if (this.sortorder == "date ascending") {
          sortarray.sort((val1, val2) => { return <any>new Date(val1.date) - <any>new Date(val2.date) });
        }
        if (this.sortorder == "date deascending") {
          sortarray.sort((val1, val2) => { return <any>new Date(val2.date) - <any>new Date(val1.date) });
        }
        this.quote = sortarray;
    }

  
  Datedifference(value){
    let dateFrom = moment().subtract(value,'d').format('YYYY-MM-DD');
    return dateFrom
  }
}