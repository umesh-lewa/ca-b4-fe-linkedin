import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http' 
import { jobList } from '../mockdata/joblist.json';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  jobSearchSuggestion=of(['Software Engineer','Software developer','Full stack developer','Software developement Engineer','Junior Software Engineer','Senior Software Engineer','Junior Software Engineer Test','Senior Software Engineer Lead']);
  constructor(private http:HttpClient) { }

  getJobList():Observable<any>{
    // return this.http.get('https://5ed0ec8f4e6d7200163a02f1.mockapi.io/jobs');
    return of(jobList);
  }

}
