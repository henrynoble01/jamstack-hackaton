import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { CloudinaryModule } from '@cloudinary/ng';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { DisplayIssuesComponent } from './component/display-issues/display-issues.component';
import { ReportIssuesComponent } from './component/report-issues/report-issues.component';
import { DisplayIssueComponent } from './component/display-issue/display-issue.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DisplayIssuesComponent, ReportIssuesComponent, DisplayIssueComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    CloudinaryModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
