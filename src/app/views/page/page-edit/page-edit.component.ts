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

  constructor(private activateRoute: ActivatedRoute, private pageService: PageService, private router: Router) {}

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.uid = params['uid'];
        this.wid = params['wid'];
        this.pid = params['pid'];
      });
    this.page = this.pageService.findPageById(this.pid);
  }

  onUpdate() {
    this.pageService.updatePage(this.pid, this.page);
    this.router.navigate(['../'], {relativeTo: this.activateRoute});
  }

  onDelete() {
    this.pageService.deletePage(this.pid);
    this.router.navigate(['../'], {relativeTo: this.activateRoute});
  }
}
