import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLoversComponent } from './project-lovers.component';

describe('ProjectLoversComponent', () => {
  let component: ProjectLoversComponent;
  let fixture: ComponentFixture<ProjectLoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectLoversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
