import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobExplanationComponent } from './job-explanation.component';

describe('JobExplanationComponent', () => {
  let component: JobExplanationComponent;
  let fixture: ComponentFixture<JobExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobExplanationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
