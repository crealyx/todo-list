class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  get getName() {
    return this.name;
  }
  set setName(name) {
    return (this.name = name);
  }
}
const projectsArray = [];

function createProject(name) {
  let project = new Project(name);
  projectsArray.push(project);
  return project;
}

export { createProject, projectsArray };
