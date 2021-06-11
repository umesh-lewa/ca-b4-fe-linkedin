import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private userInput = new Subject<string>();
  private sortInput = new Subject<string>();
  constructor() { }

  public getInput(): Observable<string> {
    return this.userInput.asObservable();
  }
  
  public updateInput(message: string): void {
    this.userInput.next(message);
  }

  public getSort(): Observable<string> {
    return this.sortInput.asObservable();
  }
  
  public updateSort(message: string): void {
    this.sortInput.next(message);
  }
}
