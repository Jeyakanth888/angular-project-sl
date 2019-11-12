import { Component, OnInit } from '@angular/core';

const reviewDetails1 = [{
  engagement_name: 'PPDS-FF-123-333-Modern', country: 'USA',
  contract_amount: '$10,000,000', review_start_date: 'Jul 30, 2019', financial_year: 'Q3 2019', estimated_contract_length: '6year 5months', assigned_to: ''
}];

const reviewDetails2 = [{
  recognition_type: '-', VL_agreement: '-', premier_agreement: '-', changepoint_setup: '-', revenue_recognition: '-', monthend_workbook_tracking: '-'
}];

@Component({
  selector: 'app-review-detail-table',
  templateUrl: './review-detail-table.component.html',
  styleUrls: ['./review-detail-table.component.scss']
})
export class ReviewDetailTableComponent implements OnInit {
  reviewDetailsData = reviewDetails1;
  reviewDetailsRequired = reviewDetails2;
  constructor() { }

  ngOnInit() {
  }

}
