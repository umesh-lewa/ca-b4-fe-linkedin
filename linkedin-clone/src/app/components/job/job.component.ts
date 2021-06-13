import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  @Input() job:any;
  postedOn:any;
  showEye=false;
  constructor(private router:Router) { }

  ngOnInit(): void {    
    // this.postedOn=new Date(this.job.postedOn)
  }
  show(){
    this.showEye=true;
  }
  hide(){
    this.showEye=false;
  }
  sendId(){
    this.router.navigate(['/home/search/',this.job.id]);
  }
}
