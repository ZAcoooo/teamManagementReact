export default class Task {
  constructor({ id = 1, title, startDate, endDate, description, comments = [], assignedMembers = []} = {}) {
    this.id = id;
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
    this.comments = comments;
    this.assignedMembers = assignedMembers;
  }
}