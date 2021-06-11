import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FilterService } from 'src/app/services/filter.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  profile
  profilesData;
  isContact: boolean = false;
  title: string
  public filterInput: string;
  public filterSubscription: Subscription;
  public sortSubscription: Subscription;
  connectionType: string

  constructor(
    private filterService:FilterService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private mainServ:MainService,
    private titleServive: Title
    )
    {    
    this.mainServ.changeActiveTitle('network');
  }

  ngOnInit(){
    this.initializeValue();
    this.filterSubscription = this.filterService.getInput().subscribe(input => this.filterProfile(input))  
    this.sortSubscription = this.filterService.getSort().subscribe(input => this.sortProfile(input))  
    this.setRandomIcon();   
    let pageTitle = this.connectionType === 'connections' ? 'Connections' : 'Conatcts'
    this.titleServive.setTitle(pageTitle);
  }

  initializeValue() {
    this.connectionType = this.route.snapshot.paramMap.get('connectionName')
    if(this.connectionType !== 'connections' && this.connectionType !== 'contacts') {
      this.router.navigate(["/home/no-network-found"], { replaceUrl: true })
    }

    this.profilesData = this.connectionType === 'connections' ? connectionData : contactsData;
    this.isContact = this.connectionType === 'contacts' 
    this.profile = this.profilesData;
    this.title = this.profilesData.length +  " " + this.connectionType
  }

  setRandomIcon() {
    this.profile.map(data => {
      let iconIndex = Math.floor(Math.random() * (3 - 0) + 0);
      data.icon = iconlist[iconIndex];
    })
  }

  filterProfile(input){
    this.profile = this.profilesData.filter(user => user.firstName.toLowerCase().includes(input) || user.lastName.toLowerCase().includes(input))
  }

  sortProfile(input) {
    this.profile = this.profilesData.sort((a, b) => {      
      if(input === "connected") return a[input].getTime() < b[input].getTime();
      return a[input] > b[input]
    });    
  }
  
  ngOnDestroy(): void {
    this.filterSubscription.unsubscribe();
    this.sortSubscription.unsubscribe();
  }

}

const iconlist = ["../../../assets/images/usericon1.jpg", "../../../assets/images/usericon2.png", "../../../assets/images/usericon3.png"]
const connectionData = [
  {
    firstName : "Sanjay", 
    lastName: "Kumar", 
    role: "Full Stack Developer", 
    connected: new Date(2020, 1, 1)
  },
  {
    firstName : "Arun", 
    lastName: "Venkat", 
    role: "Graphics Designer", 
    connected: new Date(2021, 1, 18)
  },
  {
    firstName : "Mahesh", 
    lastName: "Kumar", 
    role: "Software Developer", 
    connected: new Date(2020, 0, 12)
  },
  {
    firstName : "Naveen", 
    lastName: "Gopalan", 
    role: "Software Engineer", 
    connected: new Date(2020, 11, 20)
  },
  {
    firstName : "Niranjana", 
    lastName: "Thangaraj", 
    role: "Full Stack Developer", 
    connected: new Date(2021, 4, 20)
  },
  {
    firstName : "Arun", 
    lastName: "Basker", 
    role: "Full Stack Developer", 
    connected: new Date(2021, 2, 9)
  },
  {
    firstName : "Rajesh", 
    lastName: "Kumar", 
    role: "Full Stack Developer", 
    connected: new Date(2020, 10, 20)
  },
  {
    firstName : "Arun", 
    lastName: "Prakesh", 
    role: "Full Stack Developer", 
    connected: new Date(2021, 1, 18)
  },
  {
    firstName : "Ranjith", 
    lastName: "Kumar", 
    role: "Software Developer", 
    connected: new Date(2018, 4, 19)
  },
  {
    firstName : "Umesh", 
    lastName: "Gopalan", 
    role: "Software Tester", 
    connected: new Date(2019, 7, 9)
  }
]

const contactsData = [
  {
    firstName : "Mahesh", 
    lastName: "Kumar", 
    role: "Software Developer", 
    connected: new Date(2020, 0, 12)
  },
  {
    firstName : "Naveen", 
    lastName: "Gopalan", 
    connect:true,
    role: "Software Engineer", 
    connected: new Date(2020, 11, 20)
  },
  {
    firstName : "Niranjana", 
    lastName: "Thangaraj", 
    nonButton:true,
    connected: new Date(2021, 4, 20)
  },
  {
    firstName : "Rajesh", 
    lastName: "Kumar", 
    role: "Full Stack Developer", 
    connect:true,
    connected: new Date(2020, 10, 20)
  },
  {
    firstName : "Arun", 
    lastName: "Venkat", 
    role: "Graphics Designer", 
    connected: new Date(2021, 1, 18)
  },
  {
    firstName : "Arun", 
    lastName: "Basker", 
    role: "Full Stack Developer", 
    connect:true,
    connected: new Date(2021, 2, 9)
  },
  {
    firstName : "Rajesh", 
    lastName: "Murugan", 
    nonButton:true,
    connected: new Date(2020, 10, 20)
  },
  {
    firstName : "Madhan", 
    lastName: "Kumar", 
    role: "Tester", 
    connect:true,
    connected: new Date(2021, 1, 18)
  },
  {
    firstName : "Mahesh", 
    lastName: "Kumar", 
    connected: new Date(2020, 0, 12),
    nonButton:true
  },
  {
    firstName : "Bharath", 
    lastName: "Kumar", 
    nonButton:true,
    connected: new Date(2020, 11, 20)
  },

  {
    firstName : "Umesh", 
    lastName: "Moorthy", 
    role: "Graphics Designer", 
    connected: new Date(2021, 1, 18)
  },
  {
    firstName : "Bharani", 
    lastName: "Boopalan", 
    nonButton:true,
    connected: new Date(2021, 2, 9)
  },
  {
    firstName : "Ananad", 
    lastName: "K", 
    role: "Full Stack Developer", 
    connected: new Date(2020, 10, 20)
  },
  {
    firstName : "Joseph", 
    lastName: "Vijay", 
    nonButton:true,
    connected: new Date(2021, 1, 18)
  },
  {
    firstName : "Mohammed", 
    lastName: "Azhar", 
    role: "Software Developer", 
    connected: new Date(2021, 0, 1)
  },
  {
    firstName : "Ramya", 
    lastName: "Manohar", 
    role: "Software Engineer", 
    connected: new Date(2020, 10, 2)
  }
]