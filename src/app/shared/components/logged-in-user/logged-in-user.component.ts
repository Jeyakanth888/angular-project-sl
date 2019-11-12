import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logged-in-user',
  templateUrl: './logged-in-user.component.html',
  styleUrls: ['./logged-in-user.component.scss']
})
export class LoggedInUserComponent implements OnInit {
  private showUserLog = false;
  @ViewChild('userLog', { static: false }) public anchor: ElementRef;
  @ViewChild('popContentUserLog', { read: ElementRef, static: false }) popup: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('keydown', ['$event'])
  public keydown(event: any): void {
    if (event.keyCode === 27) {
      this.onToggleUserLogPop(false);
    }
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: any): void {
    if (this.showUserLog) {
      if (!this.contains(event.target)) {
        this.onToggleUserLogPop(false);
      }
    }
  }

  private contains(target: any): boolean {
    if (!this.anchor.nativeElement.contains(target)) {
      return (this.popup ? this.popup.nativeElement.contains(target) : false);
    } else {
      return true;
    }
  }


  public onToggleUserLogPop(show?: boolean): void {
    this.showUserLog = show !== undefined ? show : !this.showUserLog;
  }

  closeUserLogPop() {
    this.showUserLog = false;
  }


}
