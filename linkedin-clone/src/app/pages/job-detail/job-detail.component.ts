import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  id;
  constructor(private activeRoute:ActivatedRoute) {
      this.activeRoute.paramMap.subscribe(data=>{
        this.id=data.get('id');
      });
   }

  ngOnInit(): void {
  }

}
