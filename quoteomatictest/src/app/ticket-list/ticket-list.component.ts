import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TicketListService} from './ticket-list.service';
import {DealerServiceService} from '../../shared/dealer-service/dealer-service.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  
  public incidents: any = [];
  public p:number = 1;
  public userId: any;
  constructor(
    private router: Router,
    private dealerService: DealerServiceService,
    private ticketService: TicketListService,
    private SpinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('Id');
    this.getbyUserId();
  }

  ticketScreen() {
    this.router.navigate(['ticket-screen/new-dealer']);
  }

  getbyUserId() {
    this.SpinnerService.show();
    this.ticketService.getByUserId(this.userId).subscribe(response => {
      if (response.body.length > 0) {
        this.incidents = response.body;
        this.SpinnerService.hide();
      }
      else {
        this.SpinnerService.hide();
      }
    })
  }


}
