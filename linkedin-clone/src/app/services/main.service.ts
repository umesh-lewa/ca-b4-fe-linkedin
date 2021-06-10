import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private titleSubject=new BehaviorSubject<string>('home');
  titleChangeMessage=this.titleSubject.asObservable();
  constructor() { }
  changeActiveTitle(title){
    this.titleSubject.next(title);
  }
}
