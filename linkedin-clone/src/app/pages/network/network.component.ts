import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MainService } from 'src/app/services/main.service';
// import userDataJson from "../../mockdata/network-data.json"; 

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {
  userData = data
  showLess = false;
  networkType = networks

  constructor(private mainServ:MainService, private titleServive: Title){    
    this.mainServ.changeActiveTitle('network') 
    this.titleServive.setTitle("Network");
}

  restrictmyNetwork() { this.showLess = !this.showLess; }

  ngOnInit(): void {
  }
}

const networks = [
    {
        name : "Connection", 
        count: 10, 
        icon: "fluent:people-28-filled",
        "netwokurl": "/home/connection/connections"
    }, 
    { 
        name : "Contacts",
        count: 16,
        icon: "bx:bxs-contact",
        "netwokurl": "/home/connection/contacts"
    }, 
    { 
        name : "People | Follow", 
        count: 8,
        icon: "fluent:person-chat-20-filled",
        "netwokurl": "/home/no-network-found"
    }, 
    { 
        name : "Groups", 
        count: 5,
        icon : "ic:outline-groups",
        "netwokurl": "/home/no-network-found"
    }, 
    { 
        name : "Events", 
        count: 2,
        icon: "bi:calendar2-date",
        "netwokurl": "/home/no-network-found"
    }, { 
        name : "Page", 
        count: 12,
        icon: "fluent:document-one-page-20-regular",
        "netwokurl": "/home/no-network-found"
    }, { 
        name : "Newsletters", 
        count: 0,
        icon : "mdi:newspaper-variant-outline",
        "netwokurl": "/home/no-network-found"
    }, { 
        name : "Hashtag", 
        count: 15,
        icon: "heroicons-solid:hashtag",
        "netwokurl": "/home/no-network-found"
}]



const data = [
  {
      "topic" : " Industry leaders in India you may know ",
      "profiles" : [
          {
              "name" : "Deepak Kumar",
              "role" : "Software Engineer",
              "meta": "Based on your profile",
              "type": "connect",
          },
          {
              "name" : "Manoj L",
              "role" : "Techical Lead",
              "meta": "Anna Univeristy",
              "type": "connect"
          },
          {
              "name" : "Sanjay Kumar",
              "role" : "Writer",
              "meta": "Anna Univeristy",
              "type": "connect"
          },
          {
              "name" : "Aravind Raj",
              "role" : "Senior Software Engineer",
              "meta": "Anna Univeristy",
              "type": "connect"
          },
          {
              "name" : "Narmadha",
              "role" : "Python Developer",
              "meta": "Based on your profile",
              "type": "connect"
          },
          {
              "name" : "Gautham Raj",
              "role" : "Tester",
              "meta": "Based on your profile",
              "type": "connect"
          },
          {
              "name" : "Lavanya T",
              "role" : "Software Engineer",
              "meta": "Anna Univeristy",
              "type": "connect"
          },
          {
              "name" : "Mahesh Kumar",
              "role" : "Software Engineer",
              "meta": "Based on your profile",
              "type": "connect"
          }
      ]
  },
  {
      "topic" : "People you may know from Anna Univeristy",
      "profiles" : [
        {
            "name" : "Deepak Kumar",
            "role" : "Software Engineer",
            "meta": "Anna Univeristy",
            "type": "connect"
        },
        {
            "name" : "Manoj L",
            "role" : "Techical Lead",
            "meta": "Anna Univeristy",
            "type": "connect"
        },
        {
            "name" : "Sanjay Kumar",
            "role" : "Writer",
            "meta": "Anna Univeristy",
            "type": "connect"
        },
        {
            "name" : "Aravind Raj",
            "role" : "Senior Software Engineer",
            "meta": "Anna Univeristy",
            "type": "connect"
        },
        {
            "name" : "Narmadha",
            "role" : "Python Developer",
            "meta": "Anna Univeristy",
            "type": "connect"
        },
        {
            "name" : "Gautham Raj",
            "role" : "Tester",
            "meta": "Anna Univeristy",
            "type": "connect"
        },
        {
            "name" : "Lavanya T",
            "role" : "Software Engineer",
            "meta": "Anna Univeristy",
            "type": "connect"
        },
        {
            "name" : "Mahesh Kumar",
            "role" : "Software Engineer",
            "meta": "Anna Univeristy",
            "type": "connect"
        }
    ]
  }
]