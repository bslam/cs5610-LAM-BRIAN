export class Page {
  _id: String;
  name: String;
  websiteId: String;
  title: String;
  developerId: String;

  constructor(_id, name, websiteId, description, developerId) {
    this._id = _id;
    this.name = name;
    this.websiteId = websiteId;
    this.title = description;
    this.developerId = developerId;
  }
}
