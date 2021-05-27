class Project {
  constructor(name) {
    this.name = name;
  }

  get getName() {
    return this.name;
  }
  set setName(name) {
    return (this.name = name);
  }
}

function createProject(name) {
  let project = new Project(name);
  return project;
}

export { createProject };
