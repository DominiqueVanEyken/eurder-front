import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Item} from '../model/Item';
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private readonly URL: string =  `${environment.backendUrl}/items`;

  constructor(private http: HttpClient) { }

  get getItems(): Observable<any> {
    return this.http.get<Item[]>(this.URL);
  }

  addItem(item: any):Observable<void> {
    return this.http.post<void>(this.URL, item);
  }
}
