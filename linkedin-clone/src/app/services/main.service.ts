import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

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

  private searchSubject=new Subject<string>();
  searchTerm=this.searchSubject.asObservable();
  search(searchText){
    this.searchSubject.next(searchText);
  }
}
