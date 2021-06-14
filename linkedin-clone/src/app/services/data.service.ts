import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { jobList } from '../mockdata/joblist.json';
import { User } from '../constants/datatype.constants';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  jobSearchSuggestion=of(['Software Engineer','Software developer','Full stack developer','Software developement Engineer','Junior Software Engineer','Senior Software Engineer','Junior Software Engineer Test','Senior Software Engineer Lead']);
  constructor(private http:HttpClient) { }
  user:User={
    username:"Vijay Akash",
    role:"Full stack Developer",
    profilePic:"https://media-exp3.licdn.com/dms/image/C5103AQHiyCu0ytkiKA/profile-displayphoto-shrink_800_800/0/1582986312253?e=1628726400&v=beta&t=HG0iMm8oIicMJmUtLro1ZdHNrxUdqjTa5HyTCj3SU_8"
  }
  getJobList():Observable<any>{
    // return this.http.get('https://api.npoint.io/f48390a7852cfd640963');
    return this.http.get('https://api.npoint.io/9fa6b497c907411d1ae2');
    // return of(jobList);
  }
  getUser():Observable<any>{
    return of(this.user);
  }


  getFeeds() {
    return this.http.get(
      `https://api.npoint.io/277b148a661b4167dfca`
    );
  }

  getNews(){
    return this.http.get(
      `https://api.npoint.io/72a06cbbaef52d54a8e7`
    )
  }

  getConnectionList():Observable<any>{
    return this.http.get('https://api.npoint.io/f58038f4ec47de35ec4d');
  }

  getContactData():Observable<any>{
    return this.http.get('https://api.npoint.io/712113577160d6247b19');
  }

  getSuggestionData():Observable<any>{
    return this.http.get('https://api.npoint.io/62871de2edab0af7279b');
  }

  getData(connectionType:string):Observable<any>{
    let url =  connectionType ==='connections' ? "https://api.npoint.io/f58038f4ec47de35ec4d" : "https://api.npoint.io/712113577160d6247b19"
    return this.http.get(url)
  }
}
