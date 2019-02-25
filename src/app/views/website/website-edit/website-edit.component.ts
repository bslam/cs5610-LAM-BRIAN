import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css', '../../../../css/style.css']
})
export class WebsiteEditComponent implements OnInit {
  uid: string;
  websiteId: string;
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
          this.websiteId = params['wid'];
        }
      );
    this.websites = this.websiteService.findWebsitesByUser(this.uid);
    this.website = this.websiteService.findWebsitesById(this.websiteId);
  }

  onEditWebsite(websiteId) {
    const updated = this.websiteService.findWebsitesById(websiteId);
    this.website = updated;
  }

  onUpdateWebsite() {
    this.websiteService.updateWebsite(this.websiteId, this.website);
  }

  onDelete() {
    this.websiteService.deleteWebsite(this.websiteId);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
