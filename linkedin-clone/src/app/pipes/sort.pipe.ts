import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(userProfiles: any, sortInput: string): unknown {
    return userProfiles.sort((a, b) => {      
      return (sortInput === "connected")  ? 
      new Date(b[sortInput]).getTime() - new Date(a[sortInput]).getTime()
      : (a[sortInput] < b[sortInput]) ? -1: 1;
    });   
  }
}
