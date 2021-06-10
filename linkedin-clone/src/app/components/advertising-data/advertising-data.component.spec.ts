import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingDataComponent } from './advertising-data.component';

describe('AdvertisingDataComponent', () => {
  let component: AdvertisingDataComponent;
  let fixture: ComponentFixture<AdvertisingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisingDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
