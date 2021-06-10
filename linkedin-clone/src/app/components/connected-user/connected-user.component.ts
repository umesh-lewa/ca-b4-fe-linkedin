import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'connected-user',
  templateUrl: './connected-user.component.html',
  styleUrls: ['./connected-user.component.scss']
})
export class ConnectedUserComponent implements OnInit {

  @Input() user;
  @Input() icon
  @Input() contact;

  constructor() { }

  ngOnInit(): void {
  }

}
