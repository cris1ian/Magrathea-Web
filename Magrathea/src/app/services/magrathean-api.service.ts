import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { MagratheanVars } from '../models/magrathean-vars.model';

@Injectable({
  providedIn: 'root'
})
export class MagratheanAPIService {
  magratheanVars = new(MagratheanVars);

  constructor(private http: HttpClient) {}

  getLiveData() {
    let headers: { 'Content-Type': 'text/plain' };
    return this.http.get(this.magratheanVars.urlMagrathea + this.magratheanVars.statusFile, { headers: headers });
  }
  
  getConfig() {
    let headers: { 'Content-Type': 'text/plain' };
    return this.http.get(this.magratheanVars.urlMagrathea + this.magratheanVars.configFile, { headers: headers });
  }

  setParameter(campo: string, SP: any) {
    const body = new HttpParams().set(campo, SP.toString());
    return this.http.post(this.magratheanVars.urlMagrathea, body);
  }
}
