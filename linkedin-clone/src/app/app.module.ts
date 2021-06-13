import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FeedComponent } from './pages/feed/feed.component';
import { NetworkComponent } from './pages/network/network.component';
import { ConnectionComponent } from './pages/connection/connection.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HomeComponent } from './pages/home/home.component';
import { SuggestionCardComponent } from './components/suggestion-card/suggestion-card.component';
import { ConnectedUserComponent } from './components/connected-user/connected-user.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from '@angular/forms';


//components
import {NavbarComponent} from './components/navbar/navbar.component';
import { ProfileinfoComponent } from './components/profileinfo/profileinfo.component';
import { SecurityComponent } from './components/security/security.component';
import { VisibiltyComponent } from './components/visibilty/visibilty.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { DataprivacyComponent } from './components/dataprivacy/dataprivacy.component';
import { AdvertisingDataComponent } from './components/advertising-data/advertising-data.component';
import { DateDifferencePipe } from './pipes/date-difference.pipe';
import { UserFilterComponent } from './components/user-filter/user-filter.component';
import { NoNetworkComponent } from './pages/no-network/no-network.component';
import { SearchPillComponent } from './components/search-pill/search-pill.component';
import { FooterOptionsComponent } from './components/footer-options/footer-options.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { JobListCardComponent } from './components/job-list-card/job-list-card.component';
import { JobComponent } from './components/job/job.component';
import { HrComponent } from './components/hr/hr.component';
import { RecentSearchComponent } from './components/recent-search/recent-search.component';
import { JobExplanationComponent } from './components/job-explanation/job-explanation.component';
import { SanitizHtmlPipe } from './pipes/sanitiz-html.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PillButtonComponent } from './components/pill-button/pill-button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SearchJobPipe } from './pipes/search-job.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    FeedComponent,
    NetworkComponent,
    ConnectionComponent,
    JobsComponent,
    JobDetailComponent,
    NotificationComponent,
    ProfileComponent,
    SettingsComponent,
    HomeComponent,
    NavbarComponent,
    ProfileinfoComponent,
    SecurityComponent,
    VisibiltyComponent,
    CommunicationComponent,
    DataprivacyComponent,
    AdvertisingDataComponent,
    SuggestionCardComponent,
    ConnectedUserComponent,
    DateDifferencePipe,
    UserFilterComponent,
    NoNetworkComponent,
    SearchPillComponent,
    FooterOptionsComponent,
    CopyrightComponent,
    JobListCardComponent,
    JobComponent,
    HrComponent,
    RecentSearchComponent,
    JobExplanationComponent,
    NavbarComponent,
    SanitizHtmlPipe,
    PillButtonComponent,
    LoaderComponent,
    FilterPipe,
    SortPipe,
    SearchJobPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{provide: LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
