import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideshowComponent } from './sideshow.component';

describe('SideshowComponent', () => {
  let component: SideshowComponent;
  let fixture: ComponentFixture<SideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
