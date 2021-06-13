import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';
import { MainService } from 'src/app/services/main.service';
// import userDataJson from "../../mockdata/network-data.json"; 

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {
  userData = []
  showLess = false;
  isLoading = true;
  networkType = networks

  constructor(private mainServ:MainService, private titleServive: Title, private dataService: DataService){    
    this.mainServ.changeActiveTitle('network');
    this.dataService.getSuggestionData().subscribe(data => {
        this.userData = data
        this.isLoading = false;
    })
    this.titleServive.setTitle("Network | LinkedIn");
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


