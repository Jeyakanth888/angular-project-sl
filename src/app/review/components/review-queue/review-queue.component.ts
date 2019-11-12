import { Component, OnInit } from '@angular/core';
import { reviewQueueTableContents } from '../../../models/review-queue-table-items';
import { Router } from '@angular/router';
import { SelectableSettings } from '@progress/kendo-angular-grid';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

const reviewTableData = [{
  customer_name: 'Banco Ang - BAI', engagement_name: 'PRBL-TM-MCS-ANG-BAI-ModernAppsConsolidation-FY18',
  clarity_id: '2038182821', opportunity_id: '7-SDHCV5PRJ', modify_by_sbd: 'Yes', region: 'Central and Eastern Europe', sector: 'US PubSec',
  term: '', effective_date: '', involved_party: 'Yes', amount: '$497194.00', flag: true, product: 'P00001', program: 'MCS', status: 'Not started', assigned_to: ''
},
{
  customer_name: 'Banque Misr', engagement_name: 'CH-MFE-RayaNetwork-BanqueMisir--EX8-Extranet-MF-EGPT-FY14-6-EFL2YWEAE',
  clarity_id: '001507090', opportunity_id: '7-JZUYBRBEG', modify_by_sbd: 'No', region: 'United States', sector: 'Not US PubSec',
  term: '', effective_date: '', involved_party: 'Yes', amount: '$336173.43', flag: false, product: 'P00002', program: 'Premier', status: '1RC', assigned_to: ''
},
{
  customer_name: 'Banque Misr Test Test Test Test Test Test Test Test ', engagement_name: 'CH-FF-Raya Networks-BM-MCS Services-FY17-6-GNPHSST5F',
  clarity_id: '061018401', opportunity_id: '6-EFL2YWEAE', modify_by_sbd: 'Yes', region: 'Western Europe', sector: 'Not US PubSec',
  term: '', effective_date: '', involved_party: 'Yes', amount: '$411173.43', flag: true, product: 'P00003', program: 'Premier', status: '1R-In Progress', assigned_to: ''
},
{
  customer_name: 'SUTTER CHS', engagement_name: 'TM-SUTTER-USWEST-NC16048989-FY-16 O365 Migration_Azure_Intune',
  clarity_id: '001462374', opportunity_id: '6-GNPHSST5F', modify_by_sbd: 'No', region: 'MEA', sector: 'US PubSec',
  term: '', effective_date: '', involved_party: 'Yes', amount: '$205970.00', flag: false, product: 'P00004', program: 'Combined', status: 'Approved', assigned_to: ''
}];

@Component({
  selector: 'app-review-queue',
  templateUrl: './review-queue.component.html',
  styleUrls: ['./review-queue.component.scss']
})

export class ReviewQueueComponent implements OnInit {
  yearDropOptions: any[] = [{ text: '2019', value: 2019 },  { text: '2018', value: 2018 }, { text: '2017', value: 2017 },  { text: '2016', value: 2016 }];
  quarter: any[] = [{ text: 'Q1', value: 1 },  { text: 'Q2', value: 2 }, { text: 'Q3', value: 3 },  { text: 'Q4', value: 4 }];
  area: any[] = [{ text: 'All', value: 1 },  { text: 'Test', value: 2 }];
  salesLocation: any[] = [ { text: 'All', value: 1 },  { text: 'Test', value: 2 }];
  selectedQuarter = this.quarter[0];
  selectedYear = this.yearDropOptions[0];
  reviewTableData: any[] = reviewTableData;
  public view: Observable<GridDataResult>;
  public skip = 0;
  public gridView: GridDataResult;
  public checkboxOnly = false;
  public buttonCount = 10;
  public info = true;
  public type: 'numeric' | 'input' = 'numeric';
  public pageSizes = true;
  public previousNext = true;
  public detailedCollapse = false;
  public pageSize = 20;
  public collapsedRowIndex: number;
  public sort: SortDescriptor[] = [{
    field: 'amount',
    dir: 'desc'
  }];
  public allowUnsort = true;
  public selectableSettings: SelectableSettings;

  constructor(private router: Router) {   this.setSelectableSettings(); }

  ngOnInit() {

  }

  public setSelectableSettings(): void {
    this.selectableSettings = {
      checkboxOnly: this.checkboxOnly,
      mode: 'multiple'
    };
  }

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadData();
  }

  private loadData(): void {
    this.gridView = {
      data: orderBy(this.reviewTableData, this.sort),
      total: this.reviewTableData.length
    };
  }

  public onPageChange(state: any): void {
    this.pageSize = state.take;
  }

  clickNavigateReviewDetail(id: number) {
    id ?  this.router.navigate(['/review-queue/review-details/' + id]) : this.router.navigate(['/review-queue/review-details/' + undefined]);
  }

}
