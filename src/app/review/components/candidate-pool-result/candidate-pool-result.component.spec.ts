import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatePoolResultComponent } from './candidate-pool-result.component';

describe('CandidatePoolResultComponent', () => {
  let component: CandidatePoolResultComponent;
  let fixture: ComponentFixture<CandidatePoolResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatePoolResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatePoolResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
