import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';



@Injectable({
  providedIn: 'root'
})
export class CkEditorService {

  constructor(private http: HttpClient , private sharedService: SharedService) { }

  createPDF(data: any): Observable<any>{
    return this.http.post( this.sharedService.DESKTOP_API + '/file' , data);
  }
  saveData(data: any): Observable<any>{
    return this.http.post( this.sharedService.DESKTOP_API + '/template/save' , data);
  }
  updateData(data: any): Observable<any>{
    return this.http.put( this.sharedService.DESKTOP_API + '/template/update' , data);
  }
  getAllData(data: any): Observable<any>{
    return this.http.get( this.sharedService.DESKTOP_API + '/template/getAll');
  }
  getTempateById(id: any): Observable<any>{
    return this.http.get(this.sharedService.DESKTOP_API + `/template/get/${id}`);
  }
  getQuoteManager(): Observable<any>{
    return this.http.get(this.sharedService.DESKTOP_API + '/quotemanager?quotetype=ibmtssavp');
  }
}
