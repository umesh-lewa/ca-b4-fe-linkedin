import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(userProfiles: any, filterInput: string): unknown {
    if(!filterInput) return userProfiles
    return userProfiles.filter(user => user.firstName.toLowerCase().includes(filterInput) || user.lastName.toLowerCase().includes(filterInput))
  }

}
