import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { MagratheanAPIService } from 'src/app/services/magrathean-api.service';
import { MagratheanData } from 'src/app/models/magrathean-data.model';

@Component({
    selector: 'app-config',
    templateUrl: './config.component.html',
    styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
    magratheanData: MagratheanData;

    constructor(private magratheanApiService: MagratheanAPIService) { }

    ngOnInit(): void {
        // const trigger$ = timer(0, 5000).subscribe(() => this.actualizar());
        console.log("Cargado config.component");
    }

    // actualizar() {
    //     this.magratheanApiService.getJson().subscribe(res => {
    //         this.magratheanData = <MagratheanData>res;
    //         console.log(res);
    //         console.log(this.magratheanData);
    //     });
    // }

    // setHum() {
    //     console.log("Enviado SET SP Hum: " + this.magratheanData.newSpHum);
    //     this.magratheanApiService.setParameter("hum", this.magratheanData.newSpHum).subscribe();
    // }
    // setTemp() {
    //     console.log("Enviado SET SP Temp: " + this.magratheanData.newSpTemp);
    //     this.magratheanApiService.setParameter("temp1", this.magratheanData.newSpTemp).subscribe();
    // }
    // setMinuI() {
    //     console.log("Enviado SET Hora Inicio: " + (this.magratheanData.newSPminI + 60 * this.magratheanData.newSPhorI));
    //     this.magratheanApiService.setParameter("minuI", (this.magratheanData.newSPminI + 60 * this.magratheanData.newSPhorI)).subscribe();
    // }
    // setMinuF() {
    //     console.log("Enviado SET Hora Fin: " + (this.magratheanData.newSPminF + 60 * this.magratheanData.newSPhorF));
    //     this.magratheanApiService.setParameter("minuF", (this.magratheanData.newSPminF + 60 * this.magratheanData.newSPhorF)).subscribe();
    // }
    // setWiFi() {
    //     console.log("Enviados Parametros WiFi: SSID " + this.magratheanData.newSsidName + " Pass " + this.magratheanData.newSsidPass);
    //     // this.magratheanApiService.setParameter("SSID_name", this.magratheanData.newSsidName).subscribe();
    // }

    // Si inicializo en constructor ngOnInit luego no reescribe la variable ¿por qué?
}
