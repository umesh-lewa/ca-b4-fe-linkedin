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
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZWLiiGDmvoXIBKvaQ6PUkmkq2XUuXvfylOfsXnKLsM0vqCJHS0TserIFedDf4KlKy_k&usqp=CAU"
  }

}

const iconlist = ["http://www.thetrychannel.com/wp-content/uploads/2018/04/placeholder.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIfUM8g93yyRUiQ6-HB6R00QOi27zJyTHXKA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZWLiiGDmvoXIBKvaQ6PUkmkq2XUuXvfylOfsXnKLsM0vqCJHS0TserIFedDf4KlKy_k&usqp=CAU"]
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
