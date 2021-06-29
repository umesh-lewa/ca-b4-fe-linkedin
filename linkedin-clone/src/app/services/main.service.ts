import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  redirectToCognito(type){
    window.location.replace(`https://linkedin-serverless.auth.us-east-1.amazoncognito.com/${type}?client_id=${environment.clientId}&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=${environment.redirect_uri}`);
  }
}
