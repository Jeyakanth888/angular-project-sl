import { Component, OnInit, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.scss']
})
export class ReviewDetailComponent implements OnInit {

  pageRef = 'reviewDetail';
  isInitiatedReview = false;
  private showOtherReviews = false;


  @ViewChild('otherReviewsBtn', { static: false }) public anchor: ElementRef;
  @ViewChild('popOtherReviews', { read: ElementRef, static: false }) popup: ElementRef;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  clickNavigateGuidedReview() {
    this.router.navigate(['/review/guided-review']);
  }

  @HostListener('keydown', ['$event'])
  public keydown(event: any): void {
    if (event.keyCode === 27) {
      this.onToggleOtherReviewBtns(false);
    }
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: any): void {
    if (this.showOtherReviews) {
      if (!this.contains(event.target)) {
        this.onToggleOtherReviewBtns(false);
      }
    }
  }

  public onToggleOtherReviewBtns(show?: boolean): void {
    this.showOtherReviews = show !== undefined ? show : !this.showOtherReviews;
  }

  public closeReviewBtnsPop() {
    this.showOtherReviews = false;
  }

  private contains(target: any): boolean {
    if (!this.anchor.nativeElement.contains(target)) {
      return (this.popup ? this.popup.nativeElement.contains(target) : false);
    } else {
      return true;
    }
  }



}
