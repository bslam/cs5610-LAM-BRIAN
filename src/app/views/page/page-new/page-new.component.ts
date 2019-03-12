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
  @ViewChild('f') pageForm: NgForm;

  uid: string;
  wid: string;
  pid: string;
  page: Page;
  pages: Page[] = [];
  newPageName: string;
  newPageTitle: string;


  constructor(private activateRoute: ActivatedRoute, private pageService: PageService,  private router: Router) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.uid = params['uid'];
        this.wid = params['wid'];
      });
  }

  onSubmit() {
    this.newPageName = this.pageForm.value.PageName;
    this.newPageTitle = this.pageForm.value.PageTitle;
    // @ts-ignore
    this.page = {_id: '', name: this.newPageName, websiteId: this.wid, description: this.newPageTitle};
    this.pageService.createPage(this.uid, this.page);
    this.router.navigate(['../'], {relativeTo: this.activateRoute});
  }

}
