import { Location } from '@angular/common';
import { OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
// import { LocalStorageService } from 'src/app/services/localStorageService';

export class urlSetter {
    urlMagrathea: string;

    constructor() {
        if (environment.production == true){
            location: Location;
            this.urlMagrathea = location.origin;            
        } else {
            // this.urlMagrathea = "http://192.168.0.20:80";
            this.urlMagrathea = "/assets";            
        }
    }

}