import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.scss']
})
export class RecentSearchComponent implements OnInit {
  @Input() name;
  constructor() { }

  ngOnInit(): void {
  }

}
