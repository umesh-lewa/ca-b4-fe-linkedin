import { Component, OnInit, Output } from '@angular/core';
import { User } from 'src/app/constants/datatype.constants';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  openSearch=false;
  user:User
  constructor(private dataServ:DataService) { 
    this.dataServ.getUser().subscribe(data=>this.user=data);
  }

  ngOnInit(): void {
  }
  toggleSearch(event){
    this.openSearch=!this.openSearch;
  }
}
