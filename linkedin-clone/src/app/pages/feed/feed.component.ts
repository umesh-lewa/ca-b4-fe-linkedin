import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor(private mainServ:MainService ,private titleService:Title) {
    this.mainServ.changeActiveTitle('home');
    this.titleService.setTitle('feeds | Linkedin');
  }

  ngOnInit(): void {
  }

}
