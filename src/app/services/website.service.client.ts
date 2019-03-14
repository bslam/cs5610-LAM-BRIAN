import { Website } from '../models/website.model.client';
import {Injectable} from '@angular/core';


@Injectable()
export class WebsiteService {

  websites: Website[] = [
    new Website('123', 'Facebook', '123', 'Lorem'),
    new Website('234', 'Tweeter', '234', 'Lorem' ),
    new Website('456', 'Gizmodo', '456', 'Lorem' ),
    new Website('000', 'Facebook', '234', 'Lorem'),
    new Website('999', 'Tweeter', '456', 'Lorem' ),
    new Website('888', 'Gizmodo', '123', 'Lorem' ),
  ];

  createWebsite(userId: String, website: Website) {

    const new_website: Website = {
      _id: (new Date()).getTime() + '',
      name: website.name,
      developerId: website.developerId,
      description: website.description
    };

    this.websites.push(new_website);
  }

  findWebsitesByUser(userId: String) {
    const resultSet = [];
    for ( const i in this.websites) {
      if (this.websites[i].developerId === userId) {
        resultSet.push(this.websites[i]);
      }
    }
    console.log(resultSet);
    return resultSet;
  }

  findWebsitesByUser2(userId: String) {
    return this.websites.filter(function (website) {
      return website.developerId === userId;
    });
  }

  findWebsitesById(websiteId: String) {
    return this.websites.find(function (website) {
      return website._id === websiteId;
    });
  }

  updateWebsite(websiteId: String, website: Website) {
    for (const i in this.websites) {
      if (this.websites[i]._id === websiteId) {
        this.websites[i].name = website.name;
        this.websites[i].description = website.description;
      }
    }
  }

  deleteWebsite(websiteId: String) {
    for (const i in this.websites) {
      if (this.websites[i]._id === websiteId) {
        const j = +i;
        this.websites.splice(j, 1);
      }
    }
  }
}
