import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss']
})
export class UserFilterComponent implements OnInit {
  
  @Input() title
  @Input() contact

  filterOption = { "connected" : 'RecentlyAdded', "firstName": "First Name", "lastName" : "Last Name" }
  filtterSortLabel;
  showFilterOption =  false;

  constructor() { 
    this.filtterSortLabel = this.filterOption.connected
  }

  changeFilterSortoption(key){    
    this.filtterSortLabel = this.filterOption[key];
    this.changeShowFilterOptions();
  }

  changeShowFilterOptions(){
    console.log(this.showFilterOption);
    this.showFilterOption = !this.showFilterOption;
    document.getElementById('dropdown-content').style.display = (this.showFilterOption) ?  'block' : 'none';
    console.log(this.showFilterOption);
  }

  ngOnInit(): void {
  }

}
