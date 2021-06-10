import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { JobExplanationComponent } from './components/job-explanation/job-explanation.component';
import { ConnectionComponent } from './pages/connection/connection.component';
import { ContactComponent } from './pages/contact/contact.component';
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
    },
    {
      path:"connection",
      component:ConnectionComponent
    },{
      path:"contacts",
      component:ContactComponent
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
      component:SettingsComponent
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
