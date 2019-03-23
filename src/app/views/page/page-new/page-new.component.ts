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
// export class PageNewComponent implements OnInit {
//   @ViewChild('f') pageForm: NgForm;
//
//   uid: string;
//   wid: string;
//   pid: string;
//   page: Page;
//   pages: Page[] = [];
//   newPageName: string;
//   newPageTitle: string;
//
//
//   constructor(private activateRoute: ActivatedRoute, private pageService: PageService,  private router: Router) { }
//
//   ngOnInit() {
//     this.activateRoute.params.subscribe(
//       (params: any) => {
//         this.uid = params['uid'];
//         this.wid = params['wid'];
//       });
//   }
//
//   onSubmit() {
//     this.newPageName = this.pageForm.value.PageName;
//     this.newPageTitle = this.pageForm.value.PageTitle;
//     // @ts-ignore
//     this.page = {_id: '', name: this.newPageName, websiteId: this.wid, description: this.newPageTitle, developerId: this.uid};
//     this.pageService.createPage(this.uid, this.page).subscribe(
//       (data: any) => {
//         this.page = data;
//         this.router.navigate(['../'], {relativeTo: this.activateRoute});
//       }
//     );
//   }
export class PageNewComponent implements OnInit {
  @ViewChild('p') pageForm: NgForm;
  pageDescription: string;
  pageName: string;
  websiteId: string;
  developerId: string;

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
    this.pageName = this.pageForm.value.pageName;
    this.pageDescription = this.pageForm.value.pageDescription;
    const page = new Page('', this.pageName, this.websiteId, this.pageDescription, this.developerId);
    this.pageService.createPage(this.websiteId, page).subscribe(
      (data: any) => {
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      (error: any) => console.log(error)
    );
  }
}
