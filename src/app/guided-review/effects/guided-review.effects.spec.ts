import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GuidedReviewEffects } from './guided-review.effects';

describe('GuidedReviewEffects', () => {
  let actions$: Observable<any>;
  let effects: GuidedReviewEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GuidedReviewEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<GuidedReviewEffects>(GuidedReviewEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
