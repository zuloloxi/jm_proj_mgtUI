import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';
import { ProcessService } from 'src/app/services/process.service';
import { Process } from 'src/app/model/process';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  project: Project = new Project();
  processes: Process[] = [];
  process: Process = new Process();
  code: string;
  methodeName: string;
  processType: string;
  processFollow: string;

  //  constructor(private projectService: ProjectService, private documentService: DocumentService) { }
  constructor(private projectService: ProjectService, private processService: ProcessService) { }

  ngOnInit() { }

  onSubmit() {
    this.projectService.getProject(this.code)                   // recherche d'un projet avec le code projet saisi
      .subscribe(data => {
        this.project = data;                                    // récupération des données du projet
        this.project.documents = this.project.documents;        // récupération de la liste des documents projet
        this.project.reviews = this.project.reviews;            // récupération de la liste revues du projet

        // this.methodeName = this.project.method;
        this.methodeName = 'WaterFall';                          // récupération du nom de méthode du projet
        this.processType = 'ARCHITECTURE';                       // le service ne concerne que les process de type "architecture"
        this.processFollow = String(this.project.followup);      // récupération du type de suivie de type énum et conversion en string
      });

    // recherche des différentes activités de du prcessus architecture pour le projet consulé
    this.processService.getProcessForAProject(this.methodeName, this.processType, this.processFollow)
      .subscribe(processData => {
        this.processes = processData;
        console.log(processData);
      });
  }
}
