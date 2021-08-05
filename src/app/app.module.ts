import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CampaignComponent } from './components/campaign/campaign.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { SideshowComponent } from './components/sideshow/sideshow.component';
import { ProjectLoversComponent } from './components/project-lovers/project-lovers.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { LastCampaignComponent } from './components/last-campaign/last-campaign.component';
import { FooterComponent } from './components/footer/footer.component';
import { CampaignDatailComponent } from './components/campaign-datail/campaign-datail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CampaignComponent,
    ProfileComponent,
    HeaderComponent,
    SideshowComponent,
    ProjectLoversComponent,
    HowItWorksComponent,
    LastCampaignComponent,
    FooterComponent,
    CampaignDatailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
