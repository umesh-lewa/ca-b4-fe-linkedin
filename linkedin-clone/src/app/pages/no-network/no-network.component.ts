import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-no-network',
  templateUrl: './no-network.component.html',
  styleUrls: ['./no-network.component.scss']
})
export class NoNetworkComponent implements OnInit {

  constructor(private mainServ:MainService, private titleService: Title){    
    this.mainServ.changeActiveTitle('network') 
    this.titleService.setTitle("Network | Linkedin");
}

  ngOnInit(): void {
  }

}
