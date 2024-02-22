import Task from "./Task";

export default class Project {
  constructor() {
    this.name = "Test Project";
    this.description = "This is description of the first test project";
    this.tasks = [];
    this.members = [
      "Joe",
      "Lee",
      "Zaco",
      "Malcolm",
      "Jason",
    ];
  }

  createTask(title, startDate, endDate, description, members) {
    this.tasks.push(
      new Task({
        id: this.tasks.length + 1,
        title,
        startDate,
        endDate,
        description,
        comments: [],
        members,
      })
    );
  }
  getTasks() {
    return this.tasks || [];
  }

  getTaskById(id) {
    return this.tasks[id];
  }

  getNextId() {
    return this.tasks?.at(-1).id + 1 || 1;
  }
}