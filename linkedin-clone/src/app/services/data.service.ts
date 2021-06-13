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
    // return this.http.get('https://5ed0ec8f4e6d7200163a02f1.mockapi.io/jobs');
    return of(jobList);
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
}
