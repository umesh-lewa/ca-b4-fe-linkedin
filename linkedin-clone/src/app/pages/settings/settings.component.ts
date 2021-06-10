import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  div1:boolean=false;
  div2:boolean=false;
  div3:boolean=false;
  div4:boolean=false;
  div5:boolean=false;
  lang:boolean=false;
  pro:boolean=false;

  div1Function(){
      this.div1=true;
      this.div2=false;
      this.div3=false;
      this.div4=false;
      this.div5=false;
  }

  div2Function(){
      this.div2=true;
      this.div1=false;
      this.div3=false;
      this.div4=false;
      this.div5=false;
      
  }

  div3Function(){
      this.div3=true;
      this.div2=false;
      this.div1=false
      this.div4=false;
      this.div5=false;
      
  }

  div4Function(){
    this.div1=false;
    this.div2=false;
    this.div3=false;
    this.div4=true;
    this.div5=false;
  }

  div5Function(){
    this.div1=false;
    this.div2=false;
    this.div3=false;
    this.div4=false;
    this.div5=true;
  }

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

  scrolltosync() {
    document.getElementById("sync-optns").scrollIntoView();
  }
  
}
