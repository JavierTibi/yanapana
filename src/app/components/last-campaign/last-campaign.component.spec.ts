import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastCampaignComponent } from './last-campaign.component';

describe('LastCampaignComponent', () => {
  let component: LastCampaignComponent;
  let fixture: ComponentFixture<LastCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
