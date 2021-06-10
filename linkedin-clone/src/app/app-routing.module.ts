import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationComponent } from './components/communication/communication.component';
import { DataprivacyComponent } from './components/dataprivacy/dataprivacy.component';
import { ProfileinfoComponent } from './components/profileinfo/profileinfo.component';
import { SecurityComponent } from './components/security/security.component';
import { VisibiltyComponent } from './components/visibilty/visibilty.component';
import { ConnectionComponent } from './pages/connection/connection.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeedComponent } from './pages/feed/feed.component';
import { HomeComponent } from './pages/home/home.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { NetworkComponent } from './pages/network/network.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { SettingsComponent } from './pages/settings/settings.component';

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
  children:[
    {
      path:"",
      component:FeedComponent
    },{
      path:"network",
      component:NetworkComponent
    },{
      path:"connections",
      component:ConnectionComponent
    },{
      path:"contacts",
      component:ContactComponent
    },{
      path:"jobs",
      component:JobsComponent
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
        {path:"profileinfo",component:ProfileinfoComponent},
        {path:"security",component:SecurityComponent},
        {path:"visibility",component:VisibiltyComponent},
        {path:"communication",component:CommunicationComponent},
        {path:"privacy",component:DataprivacyComponent},
      ]
    } 
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
