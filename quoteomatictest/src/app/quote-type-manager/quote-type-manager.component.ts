import { Component, OnInit } from '@angular/core';
import { QuoteTypeManagerService } from './quote-type-manager.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-quote-type-manager',
  templateUrl: './quote-type-manager.component.html',
  styleUrls: ['./quote-type-manager.component.scss']
})
export class QuoteTypeManagerComponent implements OnInit {

  public quoteType = [];

  constructor(
    private quoteTypeService: QuoteTypeManagerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.GpGetAllvalues();
    // this.GpGetAllvalues();
    
  }

  GpGetAllvalues() {
    this.quoteTypeService.GpGetAll().subscribe(quoteresponse => {
      this.quoteType = quoteresponse.body;
    },
      error => {
        console.error('Could not get response because of this ', error);
      }
    );
  }

  newquoteType() {
    this.router.navigate(['new-quote-type']);
  }

  quoteTypeEdit(item) {
    this.router.navigate(['/new-quote-type', { id: item._id }]);
  }
}
