import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  openSearch=false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleSearch(event){
    this.openSearch=!this.openSearch;
  }
}
