import { AuthService } from './../service/adal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
   selector: 'app-auth-callback',
   templateUrl: './auth-callback.component.html'
})

export class AuthCallbackComponent implements OnInit {

   constructor(private router: Router, private authService: AuthService, private zone: NgZone, private activatedRoute: ActivatedRoute) { }

   ngOnInit() {
      this.authService.completeAuthentication();

      setTimeout(() => {this.zone.run(
      () => this.router.navigate(['/appcomponent'])
      ); }, 200);
   }
}
