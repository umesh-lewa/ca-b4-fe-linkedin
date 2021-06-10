import { Component, OnInit } from '@angular/core';
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
  constructor(private dataServ:DataService,private mainServ:MainService) {
    this.dataServ.jobSearchSuggestion.subscribe(data=>this.jobSearchSuggestions=data);
    this.mainServ.changeActiveTitle('jobs');
    this.dataServ.getJobList().subscribe(data=>{
      this.jobList=data;
    });

   }

  ngOnInit(): void {
  }

}
