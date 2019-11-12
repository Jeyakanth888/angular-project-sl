import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesLocationMapComponent } from './sales-location-map.component';

describe('SalesLocationMapComponent', () => {
  let component: SalesLocationMapComponent;
  let fixture: ComponentFixture<SalesLocationMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesLocationMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesLocationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
