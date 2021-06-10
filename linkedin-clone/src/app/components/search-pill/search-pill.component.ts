import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-pill',
  templateUrl: './search-pill.component.html',
  styleUrls: ['./search-pill.component.scss']
})
export class SearchPillComponent implements OnInit {
  @Input() name;
  constructor() { }

  ngOnInit(): void {
  }

}
