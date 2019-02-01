import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { PROJECTS } from '../project-list';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    projects = PROJECTS;
    selectedProject: Project;
    

  constructor() { }

    onSelect(project: Project): void {
    this.selectedProject = project;
    }

  ngOnInit() {
    this.selectedProject = this.projects[0];
  }

}
