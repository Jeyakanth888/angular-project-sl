import { Component, OnInit, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { mainMenus } from '../../../models/menu-items';
import { Router } from '@angular/router';
import { ClassField } from '@angular/compiler';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainMenuComponent implements OnInit {

  public items: any[];
  private showSend = false;

  public sendDropdownLists: Array<string> = ['Global Sharepoint', 'CompassOne', 'ChangePoint', 'Reports'];
  @ViewChild('sendpopAnchor', { static: false }) public anchor: ElementRef;
  @ViewChild('popContent', { read: ElementRef, static: false }) popup: ElementRef;

  constructor(private router: Router) {
    this.items = this.mapItems(mainMenus);
  }

  ngOnInit() { }
  @HostListener('keydown', ['$event'])
  public keydown(event: any): void {
    if (event.keyCode === 27) {
      this.onToggleSendPop(false);
    }
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: any): void {
    if (this.showSend) {
      if (!this.contains(event.target)) {
        this.onToggleSendPop(false);
      }
    }
  }

  public onToggleSendPop(show?: boolean): void {
    this.showSend = show !== undefined ? show : !this.showSend;
  }

  public closeSendPop() {
    this.showSend = false;
  }

  private contains(target: any): boolean {
    if (!this.anchor.nativeElement.contains(target)) {
      return (this.popup ? this.popup.nativeElement.contains(target) : false);
    } else {
      return true;
    }
  }


  // convert the routes to menu items.
  private mapItems(routes: any[], path?: string): any[] {
    return routes.map(item => {
      const result: any = {
        text: item.text,
        path: (path ? `${path}/` : '') + item.path
      };

      if (item.children) {
        result.items = this.mapItems(item.children, item.path);
      }

      return result;
    });
  }

  public onSelectNavigate({ item }): void {
    if (!item.items) {
      this.router.navigate([item.path]);
    }
  }


}
