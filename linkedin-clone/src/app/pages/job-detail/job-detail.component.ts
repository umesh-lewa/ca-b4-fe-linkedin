import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  id;
  jobAlert=false;
  jobAlertStatus="off";
  jobList=[];
  selectedJob;
  showAllFilter=false;
  searchTerm="";
  constructor(private activeRoute:ActivatedRoute,private mainServ:MainService,private dataServ:DataService,private titleService: Title) {
    this.titleService.setTitle('Search all Jobs | LinkedIn');
      this.mainServ.changeActiveTitle('jobs');
      this.activeRoute.paramMap.subscribe(data=>{
        this.id=data.get('id');
        this.loadData();
      });
      this.mainServ.searchTerm.subscribe(data=>this.searchTerm=data);
   }
   loadData(){
    this.dataServ.getJobList().subscribe(data=>{
      this.jobList=data.joblist;
      this.jobList.forEach((job,index)=>{
        if(job.id==this.id){
          this.selectedJob=job;
        }
      });
    });
   }
  ngOnInit(): void {
  }
  toggleJobAlert(event){
    event.stopPropagation()
    this.jobAlert=!this.jobAlert;
    this.jobAlertStatus=this.jobAlert?"on":"off";
    // console.log(this.jobAlertStatus)
  }
  toggleAllFilters(){
    this.showAllFilter=!this.showAllFilter;
  }
}
