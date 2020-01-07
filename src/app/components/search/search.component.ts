import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';
import { DocumentService } from 'src/app/services/document.service';
import { Document } from 'src/app/model/document';
import { Review } from 'src/app/model/review';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  project: Project = new Project();
  projectId: number;
  code: string;
  // documents: Document[] = [];
  // document: Document = new Document();
  // reviews: Review[] = [];
  // review: Review = new Review();

  constructor(private projectService: ProjectService, private documentService: DocumentService) { }

  ngOnInit() { }

  onSubmit() {
    this.projectService.getProject(this.code)                   //recherche d'un projet avec le code projet saisi
      .subscribe(data => {
        this.project = data;                                 //récuparation des données du projet
        this.project.documents = this.project.documents;
        this.project.reviews = this.project.reviews;
      });
  }
}
