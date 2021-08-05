import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CampaignComponent} from "./components/campaign/campaign.component";
import {HomeComponent} from "./components/home/home.component";
import {CampaignDatailComponent} from "./components/campaign-datail/campaign-datail.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'campaign', component: CampaignComponent},
  { path: 'campaign/:id', component: CampaignDatailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
