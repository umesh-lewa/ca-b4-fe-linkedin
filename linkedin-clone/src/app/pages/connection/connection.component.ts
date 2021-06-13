import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { FilterService } from 'src/app/services/filter.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  profile 
  profilesData ;
  isContact: boolean = false;
  title: string
  isLoading= true;
  public filterInput: string;
  public sortInput: string;
  public filterSubscription: Subscription;
  public sortSubscription: Subscription;
  public dataSubscription: Subscription;
  connectionType: string

  constructor(
    private filterService:FilterService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private mainServ:MainService,
    private titleServive: Title,
    private dataService: DataService
    )
    {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;  
      this.connectionType = this.route.snapshot.paramMap.get('connectionName');
      if(this.connectionType !== 'connections' && this.connectionType !== 'contacts') {
        this.router.navigate(["/home/no-network-found"], { replaceUrl: true })
      }
      this.doSubscription();
    }


    doSubscription() {
      this.mainServ.changeActiveTitle('network');
      let pageTitle = this.connectionType === 'connections' ? 'Connections' : 'Contacts'
      this.titleServive.setTitle(pageTitle + ' | LinkedIn');
      this.sortSubscription = this.filterService.getSort().subscribe(input => this.sortInput = input)
      this.filterSubscription = this.filterService.getInput().subscribe(input => this.filterInput = input)  
    }

  
  ngOnInit(){    
    this.dataSubscription = this.dataService.getData(this.connectionType).subscribe(data => {        
      this.profilesData = data;
      this.profile = data;
      this.initializeValue();          
    }, error => {
      console.log(error);
      
    })
  }

  initializeValue() {  
    this.isContact = this.connectionType === 'contacts' 
    this.title = this.profilesData.length +  " " + this.connectionType
    this.setRandomIcon();   
    this.isLoading = false
  }

  setRandomIcon() {
    this.profile.map(data => {
      let iconIndex = Math.floor(Math.random() * (3 - 0) + 0);
      data.icon = iconlist[iconIndex];
    })
  }
  
  ngOnDestroy(): void {
    this.filterSubscription?.unsubscribe();
    this.sortSubscription?.unsubscribe();
    this.dataSubscription?.unsubscribe();
  }

}

const iconlist = ["../../../assets/images/usericon1.jpg", "../../../assets/images/usericon2.png", "../../../assets/images/usericon3.png"]