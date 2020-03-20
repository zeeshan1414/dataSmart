import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  addResource(resource) {
    return this._http.post('localhost:3000/addResource', resource)
  }
}
