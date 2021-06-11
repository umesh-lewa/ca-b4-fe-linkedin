import { Component, Input, OnInit, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss']
})
export class UserFilterComponent implements OnInit {
  
  @Input() title
  @Input() contact

  filterInput = new FormControl('');
  sortInput = new FormControl()
  filterOption = { "connected" : 'RecentlyAdded', "firstName": "First Name", "lastName" : "Last Name" }

  filtterSortLabel;
  showFilterOption =  false;

  constructor(private filterService: FilterService) { 
    this.filtterSortLabel = this.filterOption.connected
  }

  changeFilterSortoption(event, key){    
    this.filtterSortLabel = this.filterOption[key];
    this.changeShowFilterOptions(event);
    this.filterService.updateSort(key);
  }

  changeShowFilterOptions(event){
    event.stopPropagation()
    this.showFilterOption = !this.showFilterOption;
    document.getElementById('dropdown-content').style.display = (this.showFilterOption) ?  'block' : 'none';
  }

  filterInputChange(value: string) {    
    this.filterService.updateInput(value.trim().toLowerCase());
  }

  ngOnInit(): void {
    this.filterService.updateSort("connected");
  }
}