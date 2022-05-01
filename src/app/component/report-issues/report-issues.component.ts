import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IssuesService } from 'src/app/services/issues.service';

@Component({
  selector: 'app-report-issues',
  templateUrl: './report-issues.component.html',
  styleUrls: ['./report-issues.component.css'],
})
export class ReportIssuesComponent implements OnInit {
  issueForm!: FormGroup;
  selectedFile!: File;
  loading: boolean = false;
  selectedFileURrl!: any;
  format: string | null = null;

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private issueService: IssuesService
  ) {}

  ngOnInit(): void {
    this.issueForm = this.builder.group({
      topic: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    this.loading = true;
    this.issueService.uploadFile(this.selectedFile).subscribe((res) => {
      this.issueService
        .addIssue({
          ...this.issueForm?.value,
          url: res.url,
          uploadDate: new Date().toISOString().split('T')[0],
          uploadDateIso: new Date().toJSON(),
          public_id: res.public_id,
          likes: 0,
          format: this.format,
        })
        .subscribe(() => {
          console.log('Loading', this.loading);
          this.loading = false;
          this.router.navigate(['/issues']);
        });
    });
  }

  onFileSelected(event: any) {
    const reader = new FileReader();
    this.selectedFile = event.target.files[0];
    reader.readAsDataURL(this.selectedFile);

    if (this.selectedFile.type.indexOf('video') > -1) {
      this.format = 'video';
    } else if (this.selectedFile.type.indexOf('image') > -1) {
      this.format = 'image';
    }

    reader.onload = (e) => {
      this.selectedFileURrl = e.target?.result;
    };
  }
}
