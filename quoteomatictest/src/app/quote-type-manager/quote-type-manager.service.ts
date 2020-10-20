import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class QuoteTypeManagerService {

  constructor(
    private http: HttpClient,
    private sharedService: SharedService
  ) { }

  GpGetAll(): Observable<any> {
    return this.http.get(this.sharedService.DESKTOP_API + '/quotetype/getAll');
  }

  createNewQuoteType(data: any): Observable<any> {
    return this.http.post(this.sharedService.DESKTOP_API + '/quotetype/save', data);
  }

  getQuoteTypeById(id: any): Observable<any> {
    return this.http.get(this.sharedService.DESKTOP_API + `/quotetype/get/${id}`, );
  }

  updateQuoteType(data: any): Observable<any> {
    return this.http.put(this.sharedService.DESKTOP_API + `/quotetype/update`, data);
  }

}
