import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class NewQuoteService {

  constructor(
    private http: HttpClient,
    private sharedService: SharedService
  ) { }

  calculate(body): Observable<any> {
    return this.http.post( this.sharedService.DESKTOP_API + '/quotemanager/calculate?quotetype=ibmtssavp', body);
  }

  generate(body): Observable<any> {
    return this.http.post( this.sharedService.DESKTOP_API + '/quotemanager/generate', body);
  }

}
