import { Page } from '../models/page.model.client';
import {Injectable} from '@angular/core';


@Injectable()
export class PageService {

  pages: Page[] = [
    new Page('321', 'Post 1', '456', 'Lorem' , '123'),
    new Page('432', 'Post 2', '456', 'Lorem' , '123'),
    new Page('543', 'Post 3', '456', 'Lorem' , '123'),
    new Page('111', 'Post 1', '123', 'Lorem' , '234'),
    new Page('222', 'Post 2', '123', 'Lorem' , '234'),
    new Page('333', 'Post 3', '123', 'Lorem' , '234'),
    new Page('444', 'Post 1', '234', 'Lorem' , '456'),
    new Page('555', 'Post 2', '234', 'Lorem' , '456'),
    new Page('666', 'Post 3', '234', 'Lorem' , '456'),
  ];

  createPage(pageId: String, page: Page) {

    const new_page = {
      _id: (new Date()).getTime() + '',
      name: page.name,
      websiteId: page.websiteId,
      title: page.title,
      developerId: page.developerId
    };

    this.pages.push(new_page);
  }

  findPageByWebsiteId(websiteId: String) {
    const resultSet = [];
    for ( const i in this.pages) {
      if (this.pages[i].websiteId === websiteId) {
        resultSet.push(this.pages[i]);
      }
    }
    return resultSet;
  }

  findPageByWebsiteId2(websiteId: String) {
    return this.pages.filter(function (page) {
      return page.websiteId === websiteId;
    });
  }

  findPageById(pageId: String) {
    return this.pages.find(function (page) {
      return page._id === pageId;
    });
  }

  updatePage(pageId: String, page: Page) {
    for (const i in this.pages) {
      if (this.pages[i]._id === pageId) {
        this.pages[i].name = page.name;
        this.pages[i].title = page.title;
      }
    }
  }

  deletePage(pageId: String) {
    for (const i in this.pages) {
      if (this.pages[i]._id === pageId) {
        const j = +i;
        this.pages.splice(j, 1);
      }
    }
  }
}
