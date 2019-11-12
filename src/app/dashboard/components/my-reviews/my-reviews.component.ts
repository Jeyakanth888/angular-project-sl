import { Component, OnInit } from '@angular/core';

const data = [{
  customer_name: 'Banco Ang - BAI', engagement_name: 'PRBL-TM-MCS-ANG-BAI-ModernAppsConsolidation-FY18',
  clarity_id: '2038182821', opportunity_id: '7-SDHCV5PRJ', modify_by_sbd: 'Yes', region: 'Central and Eastern Europe', sector: 'US PubSec',
  term: '', effective_date: '', involved_party: 'Yes', amount: '497194', flag: true, product: '--', program: 'MCS', status: 'Not started', assigned_to: ''
},
{
  customer_name: 'Banque Misr', engagement_name: 'CH-MFE-RayaNetwork-BanqueMisir--EX8-Extranet-MF-EGPT-FY14-6-EFL2YWEAE',
  clarity_id: '001507090', opportunity_id: '7-JZUYBRBEG', modify_by_sbd: 'No', region: 'United States', sector: 'Not US PubSec',
  term: '', effective_date: '', involved_party: 'Yes', amount: '336173.4374875', flag: false, product: '--', program: 'Premier', status: '1RC', assigned_to: ''
}];

@Component({
  selector: 'app-my-reviews',
  templateUrl: './my-reviews.component.html',
  styleUrls: ['./my-reviews.component.scss']
})
export class MyReviewsComponent implements OnInit {


  myReviewsData: any[] = data;
  constructor() { }

  ngOnInit() {
  }

}
