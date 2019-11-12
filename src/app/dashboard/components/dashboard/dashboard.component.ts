import { Component, OnInit, ElementRef, HostListener, ViewChild, } from '@angular/core';

const data = [{ status: 'Not Started', count: '200', amount: '$ 2,349 Million', pending_days: '5 days (avg. time)' },
{ status: '1R-In Progress', count: '135', amount: '$ 2,349 Million', pending_days: '5 days (avg. time)' },
{ status: '1RC', count: '20', amount: '$ 2,349 Million', pending_days: '5 days (avg. time)' },
{ status: '1RC-Audit', count: '5', amount: '$ 2,349 Million', pending_days: '5 days (avg. time)' },
{ status: '2R-In Progress', count: '12', amount: '$ 2,349 Million', pending_days: '5 days (avg. time)' },
{ status: '2R Variance', count: '2', amount: '$ 2,349 Million', pending_days: '5 days (avg. time)' },
{ status: 'Approved', count: '127', amount: '$ 2,349 Million', pending_days: '5 days (avg. time)' },
{ status: 'Cancelled', count: '2', amount: '$ 2,349 Million', pending_days: '5 days (avg. time)' }];

const circleTilesData = [{ circle1: { title: 'MCS', completedPercentage: 50 }, circle2: { title: 'Premier coverage', completedPercentage: 60 }, isSort: false,  subTitle: '', showCircle: 2 },
{ circle1: { title: 'Mid Tier', completedPercentage: 50 }, circle2: '', isSort: true, subTitle: 'contracts from $5 million - $20m', showCircle: 1 },
{ circle1: { title: 'Low Tier', completedPercentage: 40 }, circle2: '', isSort: true, subTitle: 'contracts from $5 million - $20m', showCircle: 1 },
{ circle1: { title: 'Amendment', completedPercentage: 50 }, circle2: { title: 'Base coverage', completedPercentage: 60 }, isSort: true, subTitle: '', showCircle: 2 },
{ circle1: { title: 'Public sector', completedPercentage: 70 }, circle2: { title: 'Non-Public coverage', completedPercentage: 60 }, isSort: true, subTitle: '', showCircle: 1 }];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tilesData: any[];
  totalCount: number;
  circleTilesData = circleTilesData;
  selectedSort = 'Count';
  showSortOption = false;

  @ViewChild('countSort', { static: false }) public anchor: ElementRef;
  @ViewChild('popCountSort', { read: ElementRef, static: false }) popup: ElementRef;

  constructor() { }

  ngOnInit() {
    this.tilesData = data;
    this.getTotalCount();
  }

  getTotalCount() {
    this.totalCount = this.tilesData.reduce((num, ndata) => {
      return num + parseInt(ndata.count);
    }, 0);
  }

  @HostListener('keydown', ['$event'])
  public keydown(event: any): void {
    if (event.keyCode === 27) {
      this.openSortOption(false);
    }
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: any): void {
    if (this.showSortOption) {
      if (!this.contains(event.target)) {
        this.openSortOption(false);
      }
    }
  }

  public openSortOption(show?: boolean): void {
    this.showSortOption = show !== undefined ? show : !this.showSortOption;
  }

  public closeSortOption() {
    this.showSortOption = false;
  }

  private contains(target: any): boolean {
    if (!this.anchor.nativeElement.contains(target)) {
      return (this.popup ? this.popup.nativeElement.contains(target) : false);
    } else {
      return true;
    }
  }

  onSelectSort(val: string) {
    if (val) {
      this.selectedSort = val ;
      this.closeSortOption();
    }
  }

}
