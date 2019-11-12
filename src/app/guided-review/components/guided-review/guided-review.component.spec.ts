import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedReviewComponent } from './guided-review.component';

describe('GuidedReviewComponent', () => {
  let component: GuidedReviewComponent;
  let fixture: ComponentFixture<GuidedReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidedReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidedReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
