import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  @Input() job:any;
  @Output() viewJobId=new EventEmitter<number>();
  postedOn:any;
  showEye=false;
  constructor() { }

  ngOnInit(): void {    
    this.postedOn=Math.floor((new Date().valueOf()-new Date(this.job.postedOn).valueOf()) / (1000*60*60))
  }
  show(){
    this.showEye=true;
  }
  hide(){
    this.showEye=false;
  }
  sendId(){
    this.viewJobId.emit(this.job.id);
  }
}
