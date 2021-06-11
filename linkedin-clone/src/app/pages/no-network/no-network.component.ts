import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-no-network',
  templateUrl: './no-network.component.html',
  styleUrls: ['./no-network.component.scss']
})
export class NoNetworkComponent implements OnInit {

  constructor(private mainServ:MainService){    
    this.mainServ.changeActiveTitle('network') 
}

  ngOnInit(): void {
  }

}
