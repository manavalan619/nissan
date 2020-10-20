import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateQuoteTypeService {

  constructor() { }
  private messageSource = new BehaviorSubject('Default message');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
