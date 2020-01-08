import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';
import { ProcessService } from 'src/app/services/process.service';
import { ProcessDTO } from 'src/app/model/process-dto';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  project: Project = new Project();
  processes: ProcessDTO[] = [];
  process: ProcessDTO = new ProcessDTO();
  code: string;
  methodeName: string;
  processFollow: string;

  constructor(private projectService: ProjectService, private processService: ProcessService) { }

  ngOnInit() { }

  onSubmit() {
    this.projectService.getProject(this.code)                    // recherche d'un projet avec le code projet saisi
      .subscribe(data => {
        this.project = data;                                     // récupération des données du projet
        this.project.documents = this.project.documents;         // récupération de la liste des documents projet
        this.project.reviews = this.project.reviews;             // récupération de la liste revues du projet
        this.methodeName = this.project.method;                  // récupération du nom de méthode du projet
        this.processFollow = this.project.followup;              // récupération du type de suivie

        // recherche des différentes activités du processus architecture pour le projet consulé
        this.processService.getProcessForAProject(this.project.method, 'ARCHITECTURE', this.project.followup)
          .subscribe(processData => {
            this.processes = processData;
          });
      });
  }
}
