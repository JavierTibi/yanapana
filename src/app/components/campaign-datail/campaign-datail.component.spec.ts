import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDatailComponent } from './campaign-datail.component';

describe('CampaignDatailComponent', () => {
  let component: CampaignDatailComponent;
  let fixture: ComponentFixture<CampaignDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignDatailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
