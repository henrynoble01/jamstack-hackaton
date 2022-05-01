import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayIssueComponent } from './component/display-issue/display-issue.component';
import { DisplayIssuesComponent } from './component/display-issues/display-issues.component';
import { ReportIssuesComponent } from './component/report-issues/report-issues.component';

const routes: Routes = [
  { path: '', redirectTo: 'issues', pathMatch: 'full' },
  { path: 'issues', component: DisplayIssuesComponent },
  { path: 'report-issues', component: ReportIssuesComponent },
  { path: 'issues/:id', component: DisplayIssueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
