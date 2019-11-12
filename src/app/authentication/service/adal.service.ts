import { Adal6HTTPService, Adal6Service } from 'adal-angular6';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  public user = null;

  private config = {
    authority: 'https://login.microsoftonline.com/AzureAD.onmicrosoft.com',
    tenant: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    clientId: '430d096f-475c-4029-b462-b6b656ee8066',
    redirectUri: 'http://localhost:4200/auth-callback',
    postLogoutRedirectUri: 'http://localhost:4200'
  };

  constructor(private adal: Adal6Service) {
    this.adal.init(this.config);
  }

  public isLoggedIn(): boolean {
    return this.adal.userInfo.authenticated;
  }

  public signout(): void {
    this.adal.logOut();
  }

  public startAuthentication(): any {
    this.adal.login();
  }

  public getName(): string {
    return this.user.profile.name;
  }

  public completeAuthentication(): void {
    this.adal.handleWindowCallback();
    this.adal.getUser().subscribe(user => {
      this.user = user;
      localStorage.setItem('token', this.adal.userInfo.token);
      console.log(this.adal.userInfo);
      //  var expireIn = user.profile.exp-newDate().getTime();
    });
  }
}
