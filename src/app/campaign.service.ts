
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Campaign } from './campaing';
import { CAMPAIGNS } from './mock-campaigns';

@Injectable({
  providedIn: 'root'
})

export class CampaignService {

  constructor() { }

  getCampaigns(): Observable<Campaign[]> {
    return of(CAMPAIGNS);
  }

  getCampaign(id: number): Observable<Campaign> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const campaign = CAMPAIGNS.find(h => h.id === id)!;
    return of(campaign);
  }
}
