import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class TicketListService {

  constructor(private http: HttpClient , private sharedService: SharedService) { }

  getAllData(): Observable<any>{
    return this.http.get( this.sharedService.DESKTOP_API + '/servicenow/getAll');
  }

  getByUserId(userId): Observable<any>{
    return this.http.get( this.sharedService.DESKTOP_API + `/servicenow/getbyUserId/${userId}`);
  }
}
