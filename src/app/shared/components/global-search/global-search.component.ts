import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit {
  searchByOptions: any[] = [
    'Review ID',
    'Accounting Contract ID',
    'Clarity ID',
    'Engagement',
    'Opportunity ID'
  ];
  selectedSearchOption = 'Review ID';
  private showSort = false;
  public listItems: Array<string> = this.searchByOptions;
  searchType: string = this.searchByOptions[0]
  searchVal: string = '';
  showNoResults:boolean = false;
  @ViewChild('searchSort', { static: false }) public anchor: ElementRef;
  @ViewChild('popContentSort', { read: ElementRef, static: false }) popup: ElementRef;
  @ViewChild('searchNoResult', { static: false }) public searchNoResult: ElementRef;
  @ViewChild('searchIcon', { static: false }) public searchIcon: ElementRef;
  constructor() { }

  ngOnInit() {

  }

  @HostListener('keydown', ['$event'])
  public keydown(event: any): void {
    if (event.keyCode === 27) {
      this.onToggleSearchSort(false);
      this.showNoResults = false;
    }
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: any): void {
    if (this.showSort) {
      if (!this.contains(event.target)) {
        this.onToggleSearchSort(false);
      }
    }
    if(this.showNoResults) {
      if (!this.resultContains(event.target)) {
        this.showNoResults = false;
      } else {
        this.showNoResults = true;
      }
    }
  }

  public onToggleSearchSort(show?: boolean): void {
    this.showSort = !this.showSort;
  }

  closeSearchSortPop() {
    this.showSort = false;
  }

  onClickSearchOption(selectedOption) {
    if (selectedOption) {
      this.selectedSearchOption = selectedOption;
      this.showSort = false;
    }
  }

  private contains(target: any): boolean {
    if (!this.anchor.nativeElement.contains(target)) {
      return (this.popup ? this.popup.nativeElement.contains(target) : false);
    } else {
      return true;
    }
  }


  private resultContains(target: any): boolean {
    if (!this.searchNoResult.nativeElement.contains(target)) {
      return (this.searchIcon ? this.searchIcon.nativeElement.contains(target) : false);
    } else {
      return true;
    }
  }

  onSearchInput(event) {
    this.searchVal = event.target.value;
  }

  clearSearchVal(event) {
    event.target.parentElement.querySelector('.k-textbox').value = '';
    this.searchVal = '';
  }

  clickSearch() {
    this.showNoResults = true;
  }


}
