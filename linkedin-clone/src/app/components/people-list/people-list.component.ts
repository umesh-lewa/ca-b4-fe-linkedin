import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
@Input() list;
@Input() title;
  constructor() { }

  ngOnInit(): void {
  }

}
