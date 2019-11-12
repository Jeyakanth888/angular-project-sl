import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-filter',
  templateUrl: './dashboard-filter.component.html',
  styleUrls: ['./dashboard-filter.component.scss']
})
export class DashboardFilterComponent implements OnInit {


  public yearDropdown = [{ text: '2019', value: '2019' }, { text: '2018', value: '2018' }, { text: '2017', value: '2017' }
    , { text: '2016', value: '2016' }, { text: '2015', value: '2015' }, { text: '2014', value: '2014' }, { text: '2013', value: '2013' }];
  public quarterDropdown = [{ text: 'Q1', value: 'q1' }, { text: 'Q2', value: 'q2' }, { text: 'Q3', value: 'q3' }
    , { text: 'Q4', value: 'q4' }];

  selectedYearSortValue = this.yearDropdown[0];
  selectedQuarterSortValue = this.quarterDropdown[0];
  constructor() { }

  ngOnInit() {

  }

}
