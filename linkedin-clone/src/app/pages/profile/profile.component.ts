import { Component, OnInit } from '@angular/core';
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
  constructor(private dataService:DataService) {
    this.dataService.getPeoples().subscribe(data=>{
      this.peopleList=data.peoples.slice(0,5);
      this.peopleSuggestion=data.peoples.slice(5,10);
    });
  }
  ngOnInit(): void {
  }

}
