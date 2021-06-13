import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(userProfiles: any, sortInput: string): unknown {
    return userProfiles.sort((a, b) => {      
      if(sortInput === "connected") return new Date(a[sortInput]).getTime() < new Date(b[sortInput]).getTime();
      return a[sortInput] > b[sortInput]
    });   
  }
}
