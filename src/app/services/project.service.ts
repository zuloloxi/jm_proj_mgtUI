import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Project } from '../model/project';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getProject(code: string): Observable<Project> {
    return this.http.get<Project>(`http://localhost:8080/project/${code}`)
  }

}
