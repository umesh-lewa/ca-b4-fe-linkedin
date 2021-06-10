import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibiltyComponent } from './visibilty.component';

describe('VisibiltyComponent', () => {
  let component: VisibiltyComponent;
  let fixture: ComponentFixture<VisibiltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisibiltyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisibiltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
