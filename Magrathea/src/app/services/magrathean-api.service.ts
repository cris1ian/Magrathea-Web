import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { MagratheanVars } from '../models/magrathean-vars.model';

@Injectable({
  providedIn: 'root'
})
export class MagratheanAPIService {
  magratheanVars = new (MagratheanVars);

  constructor(private http: HttpClient) { }

  getLiveData() {
    let headers: { 'Content-Type': 'text/plain' };
    return this.http.get(this.magratheanVars.urlMagrathea + this.magratheanVars.statusFile, { headers: headers });
  }

  getConfig() {
    let headers: { 'Content-Type': 'text/plain' };
    return this.http.get(this.magratheanVars.urlMagrathea + this.magratheanVars.configFile, { headers: headers });
  }

  getTrending() {
    let headers: { 'Content-Type': 'text/plain' };
    return this.http.get(this.magratheanVars.urlMagrathea + this.magratheanVars.trendingFile, { headers: headers, responseType: 'text' });
  }

  setParameter(campo: string, SP: any) {
    const body = new HttpParams().set(campo, SP.toString());
    console.log("Enviado: " + body);
    return this.http.post(this.magratheanVars.urlMagrathea, body);
  }

  setParameter2(campo1: string, SP1: any, campo2: string, SP2: any) {
    const body = new HttpParams()
      .set(campo1, SP1.toString())
      .set(campo2, SP2.toString());
    console.log("Enviado: " + body);
    return this.http.post(this.magratheanVars.urlMagrathea, body);
  }
}
