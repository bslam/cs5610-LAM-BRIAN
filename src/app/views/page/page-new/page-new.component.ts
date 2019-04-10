import {Component, OnInit, ViewChild} from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})

export class PageNewComponent implements OnInit {
  @ViewChild('p') pageForm: NgForm;
  pageDescription: string;
  pageName: string;
  websiteId: string;
  developerId: string;
  errorFlag: boolean;
  errorMsg = 'Please enter a page name!';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pageService: PageService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.websiteId = params['wid'];
      this.developerId = params['uid'];
    });
  }

  createPage() {
    if (this.pageForm.value.pageName === null || this.pageForm.value.pageName === '') {
      this.errorFlag = true;
      return;
    } else {
      this.pageName = this.pageForm.value.pageName;
      this.pageDescription = this.pageForm.value.pageDescription;
      const page = new Page(undefined, this.pageName, this.websiteId, this.pageDescription, this.developerId);
      this.pageService.createPage(this.websiteId, page).subscribe(
        (data: any) => {
          this.router.navigate(['../'], {relativeTo: this.route});
        },
        (error: any) => console.log(error)
      );
    }
  }
}
