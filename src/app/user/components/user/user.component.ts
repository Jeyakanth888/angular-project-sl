import { Component, OnInit, Input, Output, EventEmitter, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
const reviewers = [{
  name: 'Test 1',
  id: '100',
  designation: 'Lead',
  email: 'test@test.com'
},
{
  name: 'Test 2',
  id: '101',
  designation: '1st Reviewer',
  email: 'test2@test.com'

},
{
  name: 'Test 3',
  id: '110',
  designation: 'Head',
  email: 'test3@test.com'
},
{
  name: 'Raghu',
  id: '110',
  designation: 'Head',
  email: 'raghu@test.com'
},
];


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() showPop: boolean;
  @Input() selectionType: string;
  @Output() UserPopupStatus = new EventEmitter();
  @ViewChild('selectUser', { static: false }) public anchor: ElementRef;
  @ViewChild('popSelectUser', { read: ElementRef, static: false }) popup: ElementRef;
  public enabled: boolean = true;
  public duration: number = 200;
  public type: string = 'slide';
  public direction: string = 'left';
  searchVal: string = '';
  reviewers = reviewers;
  selectedUser: any;
  showUserSearchListPop: boolean = false;
  public accessForm: FormGroup;
  public margin = { vertical: 152 };
  public data: Array<any>;
  constructor() { }

  ngOnInit() {
    this.accessForm = new FormGroup({
      contactAccess: new FormControl(null, Validators.required),
      readAccess: new FormControl(null, Validators.required),
      reviewer1Access: new FormControl(null, Validators.required),
      reviewer2Access: new FormControl(null, Validators.required),
      devteamAccess: new FormControl(null, Validators.required)
    })
  }

  public get popupAnimate(): any {
    if (this.enabled) {
      return {
        type: this.type,
        direction: this.direction,
        duration: this.duration
      };
    }
    return false;
  }

  public submitUserAccessForm = (accessFormValues) => {
    if (this.accessForm.valid) {
      this.submitUserAccessDatas(accessFormValues);
    }
  }

  submitUserAccessDatas(accessFormValues) {
    console.log(accessFormValues);
  }

  onSearchUser(value) {
    this.searchVal = value;
    const data = reviewers.filter(reviewer => {
      const pattern = new RegExp(value);
      const reviewerName = reviewer.name.toLowerCase();
      return reviewerName.match(pattern);
    });
    this.data = data;
  }

  onSelectUser(row) {
    const index = this.reviewers.map((e) => { return e.id; }).indexOf(row.id);
    this.selectedUser = this.reviewers[index];
  }

  closeUserPopup() {
    this.showPop = false;
    this.UserPopupStatus.emit(this.showPop);
  }

}
