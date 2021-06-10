import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  lang:boolean = false;
  pro:boolean = false;
  
  langFunction(){
    if(this.lang==true){this.lang=false;}
    else{this.lang=true;}
  }

  profileFunction(){
    if(this.pro==true){this.pro=false;}
    else{this.pro=true;}
  }

  
  scrolltoprofile() {
    document.getElementById("profilediv").scrollIntoView();
  }

  scrolltosite() {
    document.getElementById("sitediv").scrollIntoView();
  }

  scrolltoothers() {
    document.getElementById("others").scrollIntoView();
  }
}
