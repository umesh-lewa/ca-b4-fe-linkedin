import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDifference'
})
export class DateDifferencePipe implements PipeTransform {

  transform(dateString: any, ...args: unknown[]): unknown {
    let date;
    if(typeof(dateString)==='string'){
       date=new Date(dateString);
    }else{
      date=dateString;
    }
    var seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    var interval = seconds / 31536000;
    
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

}

