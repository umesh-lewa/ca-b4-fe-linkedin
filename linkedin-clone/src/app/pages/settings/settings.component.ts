import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private titleService: Title) 
  {
    this.titleService.setTitle('Settings'); 
  }

  ngOnInit(): void {
  }

  div1:boolean=false;
  div2:boolean=false;
  div3:boolean=false;
  div4:boolean=false;
  div5:boolean=false;
  lang:boolean=false;
  pro:boolean=false;
  profilecomp:boolean=true;

  // div1Function(){
  //     this.div1=true;
  //     this.div2=false;
  //     this.div3=false;
  //     this.div4=false;
  //     this.div5=false;
  // }

  // div2Function(){
  //     this.div2=true;
  //     this.div1=false;
  //     this.div3=false;
  //     this.div4=false;
  //     this.div5=false;
      
  // }

  // div3Function(){
  //     this.div3=true;
  //     this.div2=false;
  //     this.div1=false
  //     this.div4=false;
  //     this.div5=false;
      
  // }

  // div4Function(){
  //   this.div1=false;
  //   this.div2=false;
  //   this.div3=false;
  //   this.div4=true;
  //   this.div5=false;
  // }

  // div5Function(){
  //   this.div1=false;
  //   this.div2=false;
  //   this.div3=false;
  //   this.div4=false;
  //   this.div5=true;
  // }


  div1Function(){
    if(this.div1){
      this.div1=false;
    }
    else{
      this.div1=true;
    }
}

div2Function(){ 
  if(this.div2){
    this.div2=false;
  }
  else{
    this.div2=true;
  }
}

div3Function(){
  if(this.div3){
    this.div3=false;
  }
  else{
    this.div3=true;
  }
}

div4Function(){
  if(this.div4){
    this.div4=false;
  }
  else{
    this.div4=true;
  }
}

div5Function(){
  if(this.div5){
    this.div5=false;
  }
  else{
    this.div5=true;
  }
}
  profilevisited(){
    this.profilecomp=false;
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
  
  scrolltoothers() {
    document.getElementById("others").scrollIntoView();
  }

  scrolltomsgs() {
    document.getElementById("msgs").scrollIntoView();
  }

  
  scrolltovisprofile(){
    document.getElementById("vis-profile").scrollIntoView();
  }

  scrolltovisactivity(){
    document.getElementById("vis-activity").scrollIntoView();
  }

  scrolltonotify(){
    document.getElementById("com-notify").scrollIntoView();
  }

  scrolltoreach(){
    document.getElementById("com-reach").scrollIntoView();
  }

  scrolltopreferences(){
    document.getElementById("preferences").scrollIntoView();
  }
}
