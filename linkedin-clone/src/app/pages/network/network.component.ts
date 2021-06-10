import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  restrictmyNetwork() { this.showLess = !this.showLess; }

  ngOnInit(): void {
  }
}

const networks = [
    {
        name : "Connection", 
        count: 10, 
        icon: "fluent:people-28-filled",
        "netwokurl": "/home/connection"
    }, 
    { 
        name : "Contacts",
        count: 16, 
        "netwokurl": "/home/contacts"
    }, 
    { 
        name : "People | Follow", 
        count: 8,
        "netwokurl": "/home/no-network-found"
    }, 
    { 
        name : "Groups", 
        count: 5,
        "netwokurl": "/home/no-network-found"
    }, 
    { 
        name : "Events", 
        count: 2,
        "netwokurl": "/home/no-network-found"
    }, { 
        name : "Page", 
        count: 12,
        "netwokurl": "/home/no-network-found"
    }, { 
        name : "Newsletters", 
        count: 0,
        "netwokurl": "/home/no-network-found"
    }, { 
        name : "Hashtag", 
        count: 15,
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