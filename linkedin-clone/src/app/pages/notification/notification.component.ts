import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private mainServ:MainService,private titleService: Title) { 
    this.mainServ.changeActiveTitle('notifications');
    this.titleService.setTitle('Notifications | LinkedIn');
  }

  ngOnInit(): void {
  }

  notificationsList=[
    {
      iconUrl:"../../assets/icons/blond-haired-person-medium-light-skin-tone.svg",
      topic1:"Rohan Arya",
      topic2:"viewed your profile",
      buttonContent:"See all views",
      buttonUrl:"",
      hoursAgo:"2h",
    },
    {
      iconUrl:"../../assets/icons/bxs-briefcase.svg",
      headingTopic:"Your Job Alert",
      topic1:"See 10 similar jobs to one you recently ",
      topic2:"viewed: Application Developer at ThoughtWorks",
      buttonContent:"View new jobs",
      buttonUrl:"",
      hoursAgo:"5h",
    },
    {
      iconUrl:"../../assets/icons/bxs-briefcase.svg",
      headingTopic:"Your Job Alert",
      topic1:"See 10 similar jobs to one you recently ",
      topic2:"viewed: Application Developer at ThoughtWorks",
      buttonContent:"View new jobs",
      buttonUrl:"",
      hoursAgo:"7h",
    },
    {
      iconUrl:"../../assets/icons/blond-haired-person-medium-light-skin-tone.svg",
      topic1:"Adithya Gattu",
      topic2:"viewed your profile",
      buttonContent:"See all views",
      buttonUrl:"",
      hoursAgo:"10h",
    },
    {
      iconUrl:"../../assets/icons/blond-haired-person-medium-light-skin-tone.svg",
      topic1:"Bharanidharan",
      topic2:"viewed your profile",
      buttonContent:"See all views",
      buttonUrl:"",
      hoursAgo:"1d",
    },
    {
      iconUrl:"../../assets/icons/tick-circle-solid.svg",
      topic1:"Your post was shared successfully",
      topic2:"",
      buttonContent:"View your post",
      buttonUrl:"",
      hoursAgo:"1d",
    },
    {
      iconUrl:"../../assets/icons/folder-briefcase-20-filled.svg",
      topic1:"Tata Consultancy Services is looking for: React JS developer",
      topic2:"See this and 5 other job recommendations",
      buttonContent:"View jobs",
      buttonUrl:"",
      hoursAgo:"1d",
    },
    {
      iconUrl:"../../assets/icons/folder-briefcase-20-filled.svg",
      topic1:"Tata Consultancy Services is looking for: React JS developer",
      topic2:"See this and 5 other job recommendations",
      buttonContent:"View jobs",
      buttonUrl:"",
      hoursAgo:"2d",
    },
  ]
}
