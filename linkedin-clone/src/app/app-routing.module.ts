import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisingDataComponent } from './components/advertising-data/advertising-data.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { DataprivacyComponent } from './components/dataprivacy/dataprivacy.component';
import { ProfileinfoComponent } from './components/profileinfo/profileinfo.component';
import { SecurityComponent } from './components/security/security.component';
import { VisibiltyComponent } from './components/visibilty/visibilty.component';
import { pathToFileURL } from 'url';
import { JobExplanationComponent } from './components/job-explanation/job-explanation.component';
import { ConnectionComponent } from './pages/connection/connection.component';
import { FeedComponent } from './pages/feed/feed.component';
import { HomeComponent } from './pages/home/home.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { NetworkComponent } from './pages/network/network.component';
import { NoNetworkComponent } from './pages/no-network/no-network.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [{
  path:"",
  component:LandingComponent
},{
  path:"login",
  component:LoginComponent
},{
  path:"register",
  component:RegisterComponent
},{
  path:"home",
  component:HomeComponent,
  canActivate:[LoginGuard],
  children:[
    {
      path:"",
      component:FeedComponent
    },{
      path:"network",
      component:NetworkComponent
    },
    {
      path:"connection/:connectionName",
      component:ConnectionComponent
    },{
      path:"jobs",
      component:JobsComponent
    },{
      path:"search/:id",
      component:JobDetailComponent
    },{
      path:"notifications",
      component:NotificationComponent
    },{
      path:"profile",
      component:ProfileComponent
    },{
      path:"settings",
      component:SettingsComponent,
      children:[
        {path:"",component:ProfileinfoComponent},
        {path:"security",component:SecurityComponent},
        {path:"visibility",component:VisibiltyComponent},
        {path:"communication",component:CommunicationComponent},
        {path:"privacy",component:DataprivacyComponent},
        {path:"advertising",component:AdvertisingDataComponent},
      ]
    },
    {
      path:"no-network-found",
      component: NoNetworkComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
