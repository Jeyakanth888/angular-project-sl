import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-review-help',
  templateUrl: './review-help.component.html',
  styleUrls: ['./review-help.component.scss']
})
export class ReviewHelpComponent implements OnInit {

  @Input() showHelpPopup: boolean;
  @Output() helpPopupStatus = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public closeHelpTogglePopup() {
    this.showHelpPopup = false;
    this.helpPopupStatus.emit(this.showHelpPopup);
  }


}
