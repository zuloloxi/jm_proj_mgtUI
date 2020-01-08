import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProcessDTO } from '../model/process-dto';


@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getProcessForAProject(name: string, ptype: string, pfollow: string): Observable<ProcessDTO[]> {
    return this.http.get<ProcessDTO[]>(`http://localhost:8080/process/methods/${name}/ptype/${ptype}/pfollow/${pfollow}`);
  }
}


