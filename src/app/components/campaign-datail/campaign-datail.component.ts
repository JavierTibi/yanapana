import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Campaign} from "../../campaing";
import {CampaignService} from "../../campaign.service";


@Component({
  selector: 'app-campaign-datail',
  templateUrl: './campaign-datail.component.html',
  styleUrls: ['./campaign-datail.component.css']
})
export class CampaignDatailComponent implements OnInit {

  campaign: Campaign | undefined;

  constructor(
      private route: ActivatedRoute,
      private campaignService: CampaignService,
      private location: Location
  ) {}

  ngOnInit(): void {
    this.getCampaign();
  }

  getCampaign(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.campaignService.getCampaign(id)
        .subscribe(campaign => this.campaign = campaign);
  }

}
