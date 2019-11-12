import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-guided-review',
  templateUrl: './guided-review.component.html',
  styleUrls: ['./guided-review.component.scss']
})

export class GuidedReviewComponent implements OnInit {

  currentPage: string;
  constructor(private location: Location, private router: Router,
              private activatedRoute: ActivatedRoute) {
    const arr = this.router.url.split('/');
    this.currentPage = arr[2];
  }

  ngOnInit() {

  }

  clickBack() {
    this.location.back();
  }

}
