import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-conclusion',
  templateUrl: './review-conclusion.component.html',
  styleUrls: ['./review-conclusion.component.scss']
})
export class ReviewConclusionComponent implements OnInit {


  @Input('initiatedReviewers') initiatedReviewers: any[];

  constructor() { }

  ngOnInit() {
    this.initiatedReviewers = [{
      reviewer_name: 'Test Name', reviewer_id: 100, reviewed_at: 1565239810000,
      reviewed_conclusion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget risus accumsan sem eleifend molestie. Fusce quis ante ac ipsum pharetra iaculis. Morbi pulvinar imperdiet diam, sed sodales velit laoreet in. Fusce ut diam nulla. Vestibulum sollicitudin nulla sed nulla lacinia, vel varius lacus pulvinar'
    },
    {
      reviewer_name: 'Test Name', reviewer_id: 100, reviewed_at: 1565239810000,
      reviewed_conclusion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget risus accumsan sem eleifend molestie. Fusce quis ante ac ipsum pharetra iaculis. Morbi pulvinar imperdiet diam, sed sodales velit laoreet in. Fusce ut diam nulla. Vestibulum sollicitudin nulla sed nulla lacinia, vel varius lacus pulvinar'
    }];

    const date = '2019-08-08 10:20:10';
    const time = new Date(date).getTime();  // convert dateformat into datetime pass to reviewed_at
  }

}
