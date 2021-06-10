import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() openSearch=new EventEmitter<boolean>();
  profilePic="https://media-exp3.licdn.com/dms/image/C5103AQHiyCu0ytkiKA/profile-displayphoto-shrink_800_800/0/1582986312253?e=1628726400&v=beta&t=HG0iMm8oIicMJmUtLro1ZdHNrxUdqjTa5HyTCj3SU_8";
  active='home';
  constructor() { }
  ngOnInit(): void {
  }
  changeActive(name){
    this.active=name;
  }
  toggleSearchBox(){
    this.openSearch.emit(true);
  }
}
