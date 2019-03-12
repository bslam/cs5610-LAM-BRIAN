import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {NgForm} from '@angular/forms';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') websitesForm: NgForm;

  uid: string;
  wid: string;
  newWebsite: Website;
  newWebsiteName: string;
  newWebsiteDescription: string;
  websites: Website[];

  constructor(private websiteService: WebsiteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.uid = params['uid'];
          this.wid = params['wid'];
        }
      );
    this.websites = this.websiteService.findWebsitesByUser(this.uid);
  }

  onSubmit() {
    this.newWebsiteName = this.websitesForm.value.WebsiteName;
    this.newWebsiteDescription = this.websitesForm.value.Description;
    this.newWebsite = {_id: '', name: this.newWebsiteName, developerId: this.uid, description: this.newWebsiteDescription};
    this.websiteService.createWebsite(this.uid, this.newWebsite);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
