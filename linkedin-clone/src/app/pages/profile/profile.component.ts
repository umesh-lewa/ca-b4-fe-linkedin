import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  peopleList=[];
  peopleSuggestion=[];
  constructor(private dataService:DataService,private mainServ:MainService,private titleServ:Title) {
    this.mainServ.changeActiveTitle("profile");
    this.dataService.getUser().subscribe(data=>this.titleServ.setTitle(`${data.username} | LinkedIn`))
    
    this.dataService.getPeoples().subscribe(data=>{
      console.log(data)
      this.peopleList=data.slice(0,5);
      this.peopleSuggestion=data.slice(5,10);
    });
  }
  ngOnInit(): void {
  }

}
