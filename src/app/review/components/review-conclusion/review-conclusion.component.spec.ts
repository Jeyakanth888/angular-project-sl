import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewConclusionComponent } from './review-conclusion.component';

describe('ReviewConclusionComponent', () => {
  let component: ReviewConclusionComponent;
  let fixture: ComponentFixture<ReviewConclusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewConclusionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewConclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
