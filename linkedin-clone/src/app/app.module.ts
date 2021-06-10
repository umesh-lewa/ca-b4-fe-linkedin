import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FeedComponent } from './pages/feed/feed.component';
import { NetworkComponent } from './pages/network/network.component';
import { ConnectionComponent } from './pages/connection/connection.component';
import { ContactComponent } from './pages/contact/contact.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HomeComponent } from './pages/home/home.component';


//components
import {NavbarComponent} from './components/navbar/navbar.component';
import { SearchPillComponent } from './components/search-pill/search-pill.component';
import { FooterOptionsComponent } from './components/footer-options/footer-options.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { JobListCardComponent } from './components/job-list-card/job-list-card.component';
import { JobComponent } from './components/job/job.component';
import { HrComponent } from './components/hr/hr.component';
import { RecentSearchComponent } from './components/recent-search/recent-search.component';
import { JobExplanationComponent } from './components/job-explanation/job-explanation.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    FeedComponent,
    NetworkComponent,
    ConnectionComponent,
    ContactComponent,
    JobsComponent,
    JobDetailComponent,
    NotificationComponent,
    ProfileComponent,
    SettingsComponent,
    HomeComponent,
    NavbarComponent,
    SearchPillComponent,
    FooterOptionsComponent,
    CopyrightComponent,
    JobListCardComponent,
    JobComponent,
    HrComponent,
    RecentSearchComponent,
    JobExplanationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
