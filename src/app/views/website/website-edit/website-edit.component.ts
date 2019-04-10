import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  uid: string;
  wid: string;
  website: Website;
  websites: Website[];

  errorFlag: boolean;
  errorMsg = 'Website name required!';

  @ViewChild('f') websiteForm: NgForm;

  constructor(private websiteService: WebsiteService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.uid = params['uid'];
          this.wid = params['wid'];
        }
      );
    this.websiteService.findAllWebsitesForUser(this.uid).subscribe(
      (data: any) => {
        this.websites = data;
      }
    );
    this.websiteService.findWebsiteById(this.wid).subscribe(
      (data: any) => {
        this.website = data;
      }
    );
  }
  onEditWebsite(websiteId) {
    this.websiteService.findWebsiteById(websiteId).subscribe(
      (data: any) => {
        this.website = data;
      }
    );
  }

  onUpdateWebsite() {
    if (!this.website.name) {
      this.errorFlag = true;
      return;
    }
    this.websiteService.updateWebsite(this.wid, this.website).subscribe(
      (data: any) => {
        this.errorFlag = false;
        this.website = data;
      }
    );
  }

  onDelete() {
    this.websiteService.deleteWebsite(this.wid).subscribe(
      (data: any) => {

      }
    );
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
