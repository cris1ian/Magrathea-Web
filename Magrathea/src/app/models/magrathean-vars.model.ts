import { Location } from '@angular/common';
import { OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
// import { LocalStorageService } from 'src/app/services/localStorageService';

export class MagratheanVars {
    statusFile = '/livedata.json';
    configFile = '/config.json';
    trendingFile = '/trending.csv';
    urlMagrathea: string;
    // urlMagrathea: 'assets';
    // urlMagrathea: location.hostname
    // location: Location;

    constructor() {
        if (environment.production == true){
            location: Location;
            this.urlMagrathea = location.origin;            
        } else {
            this.urlMagrathea = "http://192.168.0.20:80";            
        }
    }

}