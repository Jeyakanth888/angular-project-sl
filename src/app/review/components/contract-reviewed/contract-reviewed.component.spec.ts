import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractReviewedComponent } from './contract-reviewed.component';

describe('ContractReviewedComponent', () => {
  let component: ContractReviewedComponent;
  let fixture: ComponentFixture<ContractReviewedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractReviewedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractReviewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
