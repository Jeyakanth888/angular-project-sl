import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewHelpComponent } from './review-help.component';

describe('ReviewHelpComponent', () => {
  let component: ReviewHelpComponent;
  let fixture: ComponentFixture<ReviewHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
