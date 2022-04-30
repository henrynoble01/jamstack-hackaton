import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayIssueComponent } from './display-issue.component';

describe('DisplayIssueComponent', () => {
  let component: DisplayIssueComponent;
  let fixture: ComponentFixture<DisplayIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
