import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  jobSearchSuggestions=[];
  jobList=[];
  constructor(private dataServ:DataService,private mainServ:MainService,private titleService:Title) {
    this.titleService.setTitle('Jobs | Linkedin');
    this.dataServ.jobSearchSuggestion.subscribe(data=>this.jobSearchSuggestions=data);
    this.mainServ.changeActiveTitle('jobs');
    this.dataServ.getJobList().subscribe(data=>{
      console.log(data);
      this.jobList=data.jobList;
    },err=>{
      console.log(err)
    });

   }

  ngOnInit(): void {
  }

}
