import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  notificationsList=[
    {
      iconUrl:"gridicons:briefcase",
      topic1:"Rohan Ary",
      topic2:"",
      buttonContent:"See all views",
      buttonUrl:"",
      hoursAgo:"2h",
    },
    {
      iconUrl:"",
      topic1:"See 10 similar jobs to one you recently ",
      topic2:"viewed: Application Developer at ThoughtWorks",
      buttonContent:"View new jobs",
      buttonUrl:""
    },
    {
      iconUrl:"",
      topic1:"See 10 similar jobs to one you recently ",
      topic2:"viewed: Application Developer at ThoughtWorks",
      buttonContent:"View new jobs",
      buttonUrl:""
    },
    {
      iconUrl:"gridicons:briefcase",
      topic1:"Rohan Ary",
      topic2:"",
      buttonContent:"See all views",
      buttonUrl:""
    },
    {
      iconUrl:"gridicons:briefcase",
      topic1:"Rohan Ary",
      topic2:"",
      buttonContent:"See all views",
      buttonUrl:"",
      hoursAgo:"2h",
    },
    {
      iconUrl:"",
      topic1:"See 10 similar jobs to one you recently ",
      topic2:"viewed: Application Developer at ThoughtWorks",
      buttonContent:"View new jobs",
      buttonUrl:""
    },
    {
      iconUrl:"",
      topic1:"See 10 similar jobs to one you recently ",
      topic2:"viewed: Application Developer at ThoughtWorks",
      buttonContent:"View new jobs",
      buttonUrl:""
    },
    {
      iconUrl:"gridicons:briefcase",
      topic1:"Rohan Ary",
      topic2:"",
      buttonContent:"See all views",
      buttonUrl:""
    },
  ]
}
