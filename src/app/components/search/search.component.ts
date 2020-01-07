import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';
import { DocumentService } from 'src/app/services/document.service';
import { Document } from 'src/app/model/document';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  project: Project = new Project();
  projectId : number;
  code: string;
  documents: Document[]=[];
  document: Document = new Document;

  constructor(private projectService: ProjectService,private documentService: DocumentService) { }

  ngOnInit() {}

  onSubmit() {
     this.projectService.getProject(this.code)                   //recherche d'un projet avec le code projet saisi
       .subscribe(data => {
           this.project = data;                                 //récuparation des données du projet
           this.documents = this.project.documents;                              
           
          //  this.documentService.getDocuments(this.project.id)     //recherche des documents liés au projet avec l'identifiant du projet
          //    .subscribe(data2  => {this.documents = data2;});    //récuparation des documents du projet


       });
  }
}
