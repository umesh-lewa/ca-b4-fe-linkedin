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
  searchText="";
  active='home';
  openSearchBar=false;
  openProfileActions=false;
  recentSearch=["data engineer","Full stack engineer","Senior software engineer"]
  constructor(private mainServ:MainService,private router:Router) {
    this.mainServ.titleChangeMessage.subscribe(title=>this.active=title);
   }
  ngOnInit(): void {
  }
  changeActive(name){
    this.active=name;
    this.openProfileActions==false;
  }
  
  openSearchBox(){
    this.openSearch.emit(true);
    this.openSearchBar=true;
  }
  closeSearchBox(){
    this.openSearch.emit(false);
    this.openSearchBar=false;
  }
  openMe(){
    this.openProfileActions=!this.openProfileActions;
  }
  signOut(){
    localStorage.removeItem("id_token")
    this.router.navigate(["/"]);
  }
  getKeyCode(event){
    if(event.keyCode==13){
      this.search();
      this.closeSearchBox();
      event.target.blur();
    }
  }
  search(){
    this.mainServ.search(this.searchText.trim());
    if(this.searchText.trim()!="" && this.recentSearch.indexOf(this.searchText)==-1){
      this.recentSearch.pop();
      this.recentSearch.unshift(this.searchText);
    }
  }
  setSearchTerm(searchTerm){
    this.searchText=searchTerm;
  }
}
