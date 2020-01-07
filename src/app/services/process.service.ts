import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Process } from '../model/process';


@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getProcessForAProject(name: string, ptype: string, pfollow: string): Observable<Process[]> {
    return this.http.get<Process[]>(`http://localhost:8080/process/methods/${name}/ptype/${ptype}/pfollow/${pfollow}`);
  }
}


