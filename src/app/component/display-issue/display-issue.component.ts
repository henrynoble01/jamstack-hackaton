import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Cloudinary,
  CloudinaryImage,
  CloudinaryVideo,
} from '@cloudinary/url-gen';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import { IssuesService } from 'src/app/services/issues.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-display-issue',
  templateUrl: './display-issue.component.html',
  styleUrls: ['./display-issue.component.css'],
})
export class DisplayIssueComponent implements OnInit {
  issueId: number = 0;
  issueDetails: any;
  img!: CloudinaryImage;
  vid!: CloudinaryVideo;

  constructor(
    private route: ActivatedRoute,
    private issueService: IssuesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.issueId = params['id'];
    });

    const cld = new Cloudinary({
      cloud: {
        cloudName: environment.cloudinaryName,
      },
    });

    this.issueService.getIssue(this.issueId).subscribe((res) => {
      this.issueDetails = res;
      this.img =
        this.issueDetails.public_id && cld.image(this.issueDetails.public_id);

      // apply transformation
      this.img?.roundCorners(byRadius(20));

      // Use the video with public ID,
      this.vid = cld.video('hackaton/ouhfgb3amn9zuzw3corv');
      // this.issueDetails.public_id && cld.video(this.issueDetails.public_id);

      this.vid?.roundCorners(byRadius(20));
    });
  }
}
