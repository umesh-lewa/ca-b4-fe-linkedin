import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor(private mainServ:MainService ,private titleService:Title,private dataService:DataService) {
    this.mainServ.changeActiveTitle('home');
    this.titleService.setTitle('Feeds | Linkedin');
  }

  feeds;
  news;
  ngOnInit(): void {
    this.dataService.getFeeds().subscribe((resp:any[])=>{
      this.feeds = resp;
      console.log(resp);
    })

    this.dataService.getNews().subscribe((resp:any)=>{
      this.news = resp.articles;
      console.log(resp.articles)
    })
  }

}
