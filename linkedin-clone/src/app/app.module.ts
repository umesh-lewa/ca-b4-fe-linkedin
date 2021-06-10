import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { SuggestionCardComponent } from './components/suggestion-card/suggestion-card.component';
import { ConnectedUserComponent } from './components/connected-user/connected-user.component';


//components
import {NavbarComponent} from './components/navbar/navbar.component';
import { DateDifferencePipe } from './pipes/date-difference.pipe';
import { UserFilterComponent } from './components/user-filter/user-filter.component';
import { NoNetworkComponent } from './pages/no-network/no-network.component';

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
    SuggestionCardComponent,
    ConnectedUserComponent,
    DateDifferencePipe,
    UserFilterComponent,
    NoNetworkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
