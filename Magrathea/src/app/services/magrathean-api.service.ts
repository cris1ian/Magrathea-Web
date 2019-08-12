import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MagratheanAPIService {

  constructor(private http: HttpClient) { }

  getJson() {
    return this.http.get(environment.urlMagrathea + environment.statusFile);
  }

  setParameter(campo: string, SP: number) {
    const body = new HttpParams().set(campo, SP.toString());
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    return this.http.post(environment.urlMagrathea, body, { headers: headers });
  }
}
