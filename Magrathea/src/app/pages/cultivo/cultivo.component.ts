import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { MagratheanAPIService } from 'src/app/services/magrathean-api.service';
import { LiveData } from 'src/app/models/live-data.model';
import { ConfigData } from 'src/app/models/config-data.model';

// For deploying app without long hash names: 
// ng build --prod --output-hashing none

@Component({
    selector: 'app-cultivo',
    templateUrl: './cultivo.component.html',
    styleUrls: ['./cultivo.component.scss']
})
export class CultivoComponent implements OnInit {
    liveData: LiveData;
    configData: ConfigData;
    encendido: String;
    apagado: String;
    constructor(private magratheanApiService: MagratheanAPIService) { }

    ngOnInit(): void {
        const trigger$ = timer(0, 5000).subscribe(() => this.actualizar());
        this.getConfig();
    }

    actualizar() {
        this.magratheanApiService.getLiveData().subscribe(
            res => {
                this.liveData = <LiveData>res;
            }
        );
    }

    getConfig() {
        this.magratheanApiService.getConfig().subscribe(
            res => {
                this.configData = <ConfigData>res;
                this.encendido = Math.floor(this.configData.SPminI / 60) + ":" + (this.configData.SPminI % 60).toString().padStart(2, "0");
                this.apagado =   Math.floor(this.configData.SPminF / 60) + ":" + (this.configData.SPminF % 60).toString().padStart(2, "0");
            }
        )
    }

    setHum() {
        console.log("Enviado SET SP Hum: " + this.configData.SpHum);
        this.magratheanApiService.setParameter("hum", this.configData.SpHum).subscribe();
        this.getConfig();
    }
    setTemp() {
        console.log("Enviado SET SP Temp: " + this.configData.SpTemp);
        this.magratheanApiService.setParameter("temp1", this.configData.SpTemp).subscribe();
        this.getConfig();
    }
    setEncendido() {
        var minuto: number;
        var hora: number;
        hora = +this.encendido.substring(0,this.encendido.indexOf(":"));
        minuto = +this.encendido.substring(this.encendido.indexOf(":")+1);
        console.log("Enviado SET Hora Inicio: " + (minuto + 60 * hora + minuto));
        this.magratheanApiService.setParameter("MinuI", (minuto + 60 * hora + minuto)).subscribe();
        this.getConfig();
    }
    setApagado() {
        var minuto: number;
        var hora: number;
        hora = +this.apagado.substring(0,this.apagado.indexOf(":"));
        minuto = +this.apagado.substring(this.apagado.indexOf(":")+1);
        console.log("Enviado SET Hora Fin: " + (minuto + 60 * hora + minuto));
        this.magratheanApiService.setParameter("MinuF", (minuto + 60 * hora + minuto)).subscribe();
        this.getConfig();
    }

    // Si inicializo en constructor ngOnInit luego no reescribe la variable ¿por qué?
}
