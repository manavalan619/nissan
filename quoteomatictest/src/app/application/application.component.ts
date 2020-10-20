import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DealerServiceService} from '../../shared/dealer-service/dealer-service.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  constructor(
    private router: Router,
    private dealerService: DealerServiceService,
  ) { }

  ngOnInit(): void {
  }

  createTicket() {
    this.router.navigate(['form']);
  }

  ticketScreen() {
    this.router.navigate(['ticket-screen/ticket-list']);
  }

}
