import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  profile = profilesData;
  title = profilesData.length + " Connections"

  constructor(){
    this.profile.map(data => {
      let iconIndex = Math.floor(Math.random() * (3 - 0) + 0);
      data.icon = iconlist[iconIndex];
    })
    console.log(this.profile);
    
  }

  ngOnInit(){}

  getUserIcon(){
    return "../../../assets/images/usericon3.png"
  }

}

const iconlist = ["../../../assets/images/usericon1.jpg", "../../../assets/images/usericon2.png", "../../../assets/images/usericon3.png"]
const profilesData = [
  {
    firstName : "Rajesh", 
    lastName: "Kumar", 
    role: "Full Stack Developer", 
    connected: new Date(2020, 10, 20),
    icon: ""
  },
  {
    firstName : "Arun", 
    lastName: "Venkat", 
    role: "Graphics Designer", 
    connected: new Date(2021, 1, 18),
    icon: ""
  },
  {
    firstName : "Mahesh", 
    lastName: "Kumar", 
    role: "Software Developer", 
    connected: new Date(2020, 0, 12),
    icon: ""
  },
  {
    firstName : "Naveen", 
    lastName: "Gopalan", 
    role: "Software Engineer", 
    connected: new Date(2020, 11, 20),
    icon: ""
  },
  {
    firstName : "Niranjana", 
    lastName: "Thangaraj", 
    role: "Full Stack Developer", 
    connected: new Date(2021, 4, 20),
    icon: ""
  },
  {
    firstName : "Arun", 
    lastName: "Basker", 
    role: "Full Stack Developer", 
    connected: new Date(2021, 2, 9),
    icon: ""
  },
  {
    firstName : "Rajesh", 
    lastName: "Kumar", 
    role: "Full Stack Developer", 
    connected: new Date(2020, 10, 20),
    icon: ""
  },
  {
    firstName : "Arun", 
    lastName: "Venkat", 
    role: "Graphics Designer", 
    connected: new Date(2021, 1, 18),
    icon: ""
  },
  {
    firstName : "Mahesh", 
    lastName: "Kumar", 
    role: "Software Developer", 
    connected: new Date(2020, 0, 12),
    icon: ""
  },
  {
    firstName : "Naveen", 
    lastName: "Gopalan", 
    role: "Software Engineer", 
    connected: new Date(2020, 11, 20),
    icon: ""
  }
]
