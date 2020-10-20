import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-ticket-screen',
  templateUrl: './ticket-screen.component.html',
  styleUrls: ['./ticket-screen.component.scss']
})
export class TicketScreenComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  access() {
    this.router.navigate(['ticket-screen/access-system']);
  }

  newDealer() {
    this.router.navigate(['ticket-screen/new-dealer']);
  }

  newSupplier() {
    this.router.navigate(['ticket-screen/new-supplier']);
  }

  errorApplication() {
    this.router.navigate(['ticket-screen/error-report']);
  }

}
