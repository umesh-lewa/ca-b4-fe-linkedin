import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list-card',
  templateUrl: './job-list-card.component.html',
  styleUrls: ['./job-list-card.component.scss']
})
export class JobListCardComponent implements OnInit {
  @Input() title;
  @Input() description;
  @Input() jobList=[];
  constructor(private router:Router) { 

  }

  ngOnInit(): void {
  }
  viewJob(id){
    this.router.navigate(['/home/search/',id]);
  }
}
