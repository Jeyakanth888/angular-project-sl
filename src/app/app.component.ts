import { Component, OnInit } from '@angular/core';
import { AuthService } from './authentication/service/adal.service';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute, RoutesRecognized, ActivatedRouteSnapshot } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: Observable<string>;

  // constructor(private authService:AuthService) { }
  constructor( private router: Router,
               private titleService: Title) {
  }

  ngOnInit() {
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          return 'Sherlock - ' + this.getDeepestTitle(this.router.routerState.snapshot.root);
        })
      ).subscribe((ttl: string) => {
        this.titleService.setTitle(ttl);
      });
  }

  private getDeepestTitle(routeSnapshot: ActivatedRouteSnapshot) {
    let title = routeSnapshot.data ? routeSnapshot.data.title : '';
    if (routeSnapshot.firstChild) {
      title = this.getDeepestTitle(routeSnapshot.firstChild) || title;
    }
    this.title = title.replace(/\s/g, '').toLowerCase();
    return title;
  }

  public signout(): void {
    // this.authService.signout();
  }
}
