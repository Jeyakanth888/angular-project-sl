import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { footerMenus } from '../../../models/menu-items';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public items: any[];
  constructor(private router: Router) {
    this.items = this.mapItems(footerMenus);
  }

  ngOnInit() {

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

  onSelectNavigateNewTab({ item }): void {
    if (!item.items) {
      this.router.navigate([]).then(result => { window.open(item.path, '_blank'); });
    }
  }


}
