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
  pid: string;
  website: Website;
  websites: Website[];
  @ViewChild('f') websiteForm: NgForm;

  constructor(private websiteService: WebsiteService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.uid = params['uid'];
          this.wid = params['wid'];
          this.pid = params['pid'];
        }
      );
    this.websites = this.websiteService.findWebsitesByUser(this.uid);
    this.website = this.websiteService.findWebsitesById(this.wid);
  }

  onEditWebsite(wid) {
    const updated = this.websiteService.findWebsitesById(wid);
    this.website = updated;
  }

  onUpdateWebsite() {
    this.websiteService.updateWebsite(this.wid, this.website);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDelete() {
    this.websiteService.deleteWebsite(this.wid);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
