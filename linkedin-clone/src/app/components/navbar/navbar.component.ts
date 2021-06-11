import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/constants/datatype.constants';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() openSearch=new EventEmitter<boolean>();
  @Input() user:User;
  active='home';
  openSearchBar=false;
  openProfileActions=false;
  constructor(private mainServ:MainService,private router:Router) {
    this.mainServ.titleChangeMessage.subscribe(title=>this.active=title);
   }
  ngOnInit(): void {
  }
  changeActive(name){
    this.active=name;
    this.openProfileActions==false;
  }
  toggleSearchBox(){
    this.openSearch.emit(true);
    this.openSearchBar=!this.openSearchBar;
  }
  openMe(){
    this.openProfileActions=!this.openProfileActions;
  }
  signOut(){
    this.router.navigate(["/login"]);
  }
}
