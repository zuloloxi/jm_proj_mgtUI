import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
// import { Document } from '../model/document';
// import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // searchValue: Subject<number> = new Subject<number>();

  constructor(private http: HttpClient) { }


}
