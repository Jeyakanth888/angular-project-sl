import { Component, OnInit, ElementRef, HostListener, ViewChild, Optional } from '@angular/core';

const reviewers = [{
  name: 'Test 1',
  id: '100',
  designation: 'Lead',
  assigned: false
},
{
  name: 'Test 2',
  id: '101',
  designation: '1st Reviewer',
  assigned: false
},
{
  name: 'Test 3',
  id: '110',
  designation: 'Head',
  assigned: false
},
{
  name: 'Test 1',
  id: '100',
  designation: 'Lead',
  assigned: false
},
{
  name: 'Test 2',
  id: '101',
  designation: '1st Reviewer',
  assigned: false
},
{
  name: 'Raghu',
  id: '110',
  designation: 'Head',
  assigned: false
},
];



@Component({
  selector: 'app-reviewers',
  templateUrl: './reviewers.component.html',
  styleUrls: ['./reviewers.component.scss']
})

export class ReviewersComponent implements OnInit {
  isAssignedReviewer = true;
  reviewers = reviewers;
  assignedReviewer: any = [];
  private showAssignReviewer = false;
  selectedReviewer: string = '';
  clickedChangeReviewer: boolean = false;
  clickedAssignNewReviewerIndex: number = 0;
  sortVal: string = '';
  public margin = { vertical: '550px' };
  public data: Array<any>;

  constructor() {

  }

  @ViewChild('assignReviewer', { static: false }) public anchor: ElementRef;
  @ViewChild('searchReviewerIP', { read: ElementRef, static: false }) searchReviewerInput: ElementRef;

  ngOnInit() {
    this.assignedReviewer = this.reviewers.filter(reviewer => {
      return reviewer.assigned === true;
    });
    const dataLength = this.assignedReviewer.length;

    if (dataLength < 2) {
      for (let i = 0; i < 2; i++) {
        const eObj = {
          name: 'Unassigned',
          id: '0',
          designation: '',
          assigned: false
        }
        this.assignedReviewer.push(eObj);
      }
    }

  }

  @HostListener('keydown', ['$event'])
  public keydown(event: any): void {
    if (event.keyCode === 27) {
      this.clickedChangeReviewer = false;
    }
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: any): void {
    if (event.target.classList.contains('unassigned')) {
        this.clickedChangeReviewer = true;
    } else {
      if (!this.contains(event.target)) {
        this.clickedChangeReviewer = false;
      }
    }
  }

  private contains(target: any): boolean {
    if (!this.anchor.nativeElement.contains(target)) {
      return (this.searchReviewerInput ? this.searchReviewerInput.nativeElement.contains(target) : false);
    } else {
      return true;
    }
  }


  public onToggleAssignReviewer(index): void {
    // this.showAssignReviewer = show !== undefined ? show : !this.showAssignReviewer;
    this.showAssignReviewer = !this.showAssignReviewer;
    this.clickedAssignNewReviewerIndex = index;
    this.clickedChangeReviewer = !this.clickedChangeReviewer;
  }

  public closeAssignReviewer() {
    this.showAssignReviewer = false;
    this.clickedChangeReviewer = false;
  }

  onSelectReviewer(row) {
    const index = this.reviewers.map((e) => { return e.id; }).indexOf(row.id);
    this.selectedReviewer = this.reviewers[index].name;
    this.assignedReviewer[this.clickedAssignNewReviewerIndex].name = this.selectedReviewer;
    this.closeAssignReviewer();
  }


  clearSortVal(event) {
    event.target.parentElement.querySelector('.k-textbox').value = '';
    this.sortVal = '';
    this.reviewers = reviewers;
  }


  handleFilter(value) {
    this.sortVal = value;
    const data = reviewers.filter(reviewer => {
      const pattern = new RegExp(value);
      const reviewerName = reviewer.name.toLowerCase();
      return reviewerName.match(pattern);
    });
    this.data = data;
  }

}
