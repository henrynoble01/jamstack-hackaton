import { Component, OnInit } from '@angular/core';
import { IssuesService } from 'src/app/services/issues.service';

@Component({
  selector: 'app-display-issues',
  templateUrl: './display-issues.component.html',
  styleUrls: ['./display-issues.component.css'],
})
export class DisplayIssuesComponent implements OnInit {
  issueList$: any;
  constructor(private issueService: IssuesService) {}

  ngOnInit(): void {
    this.issueList$ = this.issueService.getIssues();
  }
}
