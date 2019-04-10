import {Component, OnInit, ViewChild} from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {activateRoutes} from '@angular/router/src/operators/activate_routes';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css'],
})
export class PageEditComponent implements OnInit {
  @ViewChild('f') pageForm: NgForm;

  uid: string;
  wid: string;
  pid: string;
  page: Page;
  errorFlag: boolean;
  errorMsg = 'Please enter a name for the page!';

  constructor(private activateRoute: ActivatedRoute, private pageService: PageService, private router: Router) {}

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.uid = params['uid'];
        this.wid = params['wid'];
        this.pid = params['pid'];
      });
    this.pageService.findPageById(this.pid).subscribe(
      (data: any) => {
        this.page = data;
      }
    );
  }

  onUpdate() {
    if (!this.page.name) {
      this.errorFlag = true;
      return;
    } else {
      this.pageService.updatePage(this.pid, this.page).subscribe(
        (data: any) => {
          this.page = data;
          this.router.navigate(['../'], {relativeTo: this.activateRoute});
        }
      );
    }

  }

  onDelete() {
    this.pageService.deletePage(this.pid).subscribe(
      (data: any) => {

      }
    );
    this.router.navigate(['../'], {relativeTo: this.activateRoute});
  }
}
