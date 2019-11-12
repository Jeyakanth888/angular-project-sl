import { Component, OnInit } from '@angular/core';
const reviewDetails = [{
  review_id: '1234567890', customer: 'Microsoft Corporation', amount: '$10,000,000', status: '1R-In Progress'
},
{
  review_id: '1234567890', customer: 'Sony corporation', amount: '$10,000,000', status: '1RC'
},
{
  review_id: '1234567890', customer: 'BNP Paribas', amount: '$10,000,000', status: 'Approved'
},
{
  review_id: '1234567890', customer: 'Comcast cable communications management', amount: '$10,000,000', status: 'Not started'
},
{
  review_id: '1234567890', customer: 'Goldman Sachs & co.', amount: '$10,000,000', status: '1RC'
},
{
  review_id: '1234567890', customer: 'American Airlines Inc.', amount: '$10,000,000', status: '1RC'
},
{
  review_id: '1234567890', customer: 'American Airlines Inc.', amount: '$10,000,000', status: '1RC'
},
{
  review_id: '1234567890', customer: 'Indiana university health inc.', amount: '$10,000,000', status: '1RC'
},
{
  review_id: '1234567890', customer: 'Microsoft Corporation', amount: '$10,000,000', status: '1RC'
},
{
  review_id: '1234567890', customer: 'Fujitsu limited', amount: '$10,000,000', status: '1RC'
},
{
  review_id: '1234567890', customer: 'Fujitsu limited', amount: '$10,000,000', status: '1RC'
},
{
  review_id: '1234567890', customer: 'Fujitsu limited', amount: '$10,000,000', status: '1RC'
}];


@Component({
  selector: 'app-top-reviews',
  templateUrl: './top-reviews.component.html',
  styleUrls: ['./top-reviews.component.scss']
})
export class TopReviewsComponent implements OnInit {

  reviewsDropdown: any[] = [{ text: 'In-Progress', value: 'In-Progress' }, { text: 'Approved', value: 'Approved' }, { text: 'Canceled', value: 'Canceled' }];
  reviewDetailsData = reviewDetails;
  showData: any[] = [];
  public selectedReviewSort = this.reviewsDropdown[0];

  constructor() { }

  ngOnInit() {
    const emptyArr = [];
    this.reviewDetailsData.slice(0, 10).forEach((data) => {
      emptyArr.push(data);
    });
    this.showData = emptyArr;
  }

  clickViewMoreReviews() {
    this.showData = this.reviewDetailsData;
  }



}
