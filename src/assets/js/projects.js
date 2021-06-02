class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  get getName() {
    return this.name;
  }

  set setName(name) {
    this.name = name;
  }
}
const projectsArray = [];

function createProject(name) {
  const project = new Project(name);
  projectsArray.push(project);
  return project;
}

export { createProject, projectsArray };
