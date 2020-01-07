import { Component, OnInit, Input } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Document } from 'src/app/model/document';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  @Input()
  document: Document;

  @Input()
  project: Project;


  constructor(private documentService: DocumentService) {}

  ngOnInit() {      
  }
}

