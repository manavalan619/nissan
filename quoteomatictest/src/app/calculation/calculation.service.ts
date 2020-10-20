import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../config/Constant';
import { Observable } from 'rxjs';
import { SharedService } from '../../shared/shared.service';


@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor(
    private http: HttpClient,
    private constants: Constants,
    private sharedService: SharedService
  ) { }
  save(options: any): Observable<any> {
    return this.http.post(this.sharedService.DESKTOP_API + '/calculationmanager/save', options);
  }

  getDataManager(quoteTypeId: any): Observable<any> {
    return this.http.get(this.sharedService.DESKTOP_API + '/datamanager/search/' + quoteTypeId);
  }

  getAll(): Observable<any> {
    return this.http.get(this.sharedService.DESKTOP_API + '/calculationmanager/get');
  }

  getById(id: any): Observable<any> {
    return this.http.get(this.sharedService.DESKTOP_API + '/calculationmanager/get/' + id);
  }

  update(data: any): Observable<any> {
    return this.http.put(this.sharedService.DESKTOP_API + '/calculationmanager/update ', data );
  }

  getDataSource(): Observable<any> {
    return this.http.get(this.sharedService.DESKTOP_API + '/datamanager/datasource/get');
  }


}
