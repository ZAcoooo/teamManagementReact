export default class Task {
  constructor({ id = 1, title, startDate, endDate, description, comments = [], members = []} = {}) {
    this.id = id;
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
    this.comments = comments;
    this.members = members;
    this.status = false;
  }
}