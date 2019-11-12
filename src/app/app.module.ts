import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardService } from './authentication/guard/auth-guard';
import { AuthService } from './authentication/service/adal.service';
import { Adal6Service, Adal6HTTPService } from 'adal-angular6';
import { AuthCallbackComponent } from './authentication/component/auth-callback.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './authentication/token.interceptor';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './dashboard/effects/dashboard.effects';
import { ReviewEffects } from './review/effects/review.effects';
import { GuidedReviewEffects } from './guided-review/effects/guided-review.effects';
// import * as fromReview from './review/reducers/review.reducer';
// import * as fromDashboard from './dashboard/reducers/dashboard.reducer';
// import * as fromGuidedReview from './guided-review/reducers/guided-review.reducer';
import { MainMenuComponent } from './shared/components/main-menu/main-menu.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { GlobalSearchComponent } from './shared/components/global-search/global-search.component';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { PopupModule } from '@progress/kendo-angular-popup';
import { MenuModule } from '@progress/kendo-angular-menu';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule, SharedModule } from '@progress/kendo-angular-grid';
import { ReviewModule } from './review/review.module';
import { LoggedInUserComponent } from './shared/components/logged-in-user/logged-in-user.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { Meta } from '@angular/platform-browser';
import { GuidedReviewModule } from './guided-review/guided-review.module';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { UploadModule } from '@progress/kendo-angular-upload';
import { FormsModule } from '@angular/forms';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { LabelModule } from '@progress/kendo-angular-label';




@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent,
    MainMenuComponent,
    FooterComponent,
    GlobalSearchComponent,
    LoggedInUserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReviewModule,
    DashboardModule,
    GuidedReviewModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      DashboardEffects,
      ReviewEffects,
      GuidedReviewEffects
    ]),
    // EffectsModule.forFeature([DashboardEffects, ReviewEffects, GuidedReviewEffects]),
    // StoreModule.forFeature('dashboard', fromDashboard.reducer),
    // StoreModule.forFeature('review', fromReview.reducer),
    // StoreModule.forFeature('guidedReview', fromGuidedReview.reducer),

    ButtonsModule,
    DateInputsModule,
    DropDownsModule,
    InputsModule,
    PopupModule,
    MenuModule,
    RouterModule,
    LayoutModule,
    GridModule,
    DropDownsModule,
    TreeViewModule,
    TooltipModule,
    UploadModule,
    FormsModule,
    NotificationModule,
    LabelModule
  ],
  providers: [
    Title,
    AuthGuardService,
    AuthService,
    /*  Adal6Service,
      {
        provide: Adal6HTTPService,
        useFactory: Adal6HTTPService.factory,
        deps: [HttpClient, Adal6Service]
      },*/
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
