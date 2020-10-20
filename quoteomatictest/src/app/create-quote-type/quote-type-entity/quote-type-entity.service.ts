import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class QuoteTypeEntityService {

  constructor(
    private http: HttpClient,
    private sharedService: SharedService
  ) { }

  private messageSource = new BehaviorSubject('Default message');
  currentMessage = this.messageSource.asObservable();

  sendMessage(message: string) {
    this.messageSource.next(message);
  }

  createEntity(data: any): Observable<any> {
    return this.http.post(this.sharedService.DESKTOP_API + '/datamanager/datasource/entity/save', data);
  }
}
