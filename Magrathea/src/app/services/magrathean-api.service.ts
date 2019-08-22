import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MagratheanAPIService {

  constructor(private http: HttpClient) { }

  getLiveData() {
    let headers: { 'Content-Type': 'text/plain' };
    return this.http.get(environment.urlMagrathea + environment.statusFile, { headers: headers });
  }
  
  getConfig() {
    let headers: { 'Content-Type': 'text/plain' };
    return this.http.get(environment.urlMagrathea + environment.configFile, { headers: headers });
  }

  setParameter(campo: string, SP: number) {
    const body = new HttpParams().set(campo, SP.toString());
    return this.http.post(environment.urlMagrathea, body);
  }
}
