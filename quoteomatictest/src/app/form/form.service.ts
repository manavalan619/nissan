import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private http: HttpClient,
    private sharedService: SharedService
  ) { }

  save(data): Observable<any> {
    return this.http.post( this.sharedService.DESKTOP_API + '/servicenow/save', data);
  }

  update(sys_id, data): Observable<any> {
    return this.http.put( this.sharedService.DESKTOP_API + `/servicenow/update/${sys_id}`, data);
  }

  delete(sys_id): Observable<any> {
    return this.http.delete( this.sharedService.DESKTOP_API + `/servicenow/delete/${sys_id}`);
  }

  deleteIncident(sys_id, userId): Observable<any> {
    return this.http.delete( this.sharedService.DESKTOP_API + `/servicenow/delete/${sys_id}?user_id=${userId}`);
  }

  get(sys_id): Observable<any> {
    return this.http.get( this.sharedService.DESKTOP_API + `/servicenow/get/${sys_id}`);
  }

  getAllUsers(): Observable<any> {
    return this.http.get( this.sharedService.DESKTOP_API + `/servicenow/getAll/users`);
  }

  getAllAssignmentGroups(): Observable<any> {
    return this.http.get( this.sharedService.DESKTOP_API + `/servicenow/getAll/groups`);
  }
}
