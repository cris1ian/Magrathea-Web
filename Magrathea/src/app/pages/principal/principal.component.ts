import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { MagratheanAPIService } from 'src/app/services/magrathean-api.service';
import { MagratheanData } from 'src/app/models/magrathean-data.model';
import { LiveData } from 'src/app/models/live-data.model';
import { ConfigData } from 'src/app/models/config-data.model';

// For deploying app without long hash names: 
// ng build --prod --output-hashing none

@Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
    liveData: LiveData;
    configData: ConfigData;
    public HoraI: number;
    public MinuI: number;
    public HoraF: number;
    public MinuF: number;

    constructor(private magratheanApiService: MagratheanAPIService) { }

    ngOnInit(): void {
        const trigger$ = timer(0, 5000).subscribe(() => this.actualizar());
        this.magratheanApiService.getConfig().subscribe(
            res => {
                this.configData = <ConfigData>res;
                this.HoraI = Math.floor(this.configData.SPminI / 60);
                this.MinuI = (this.configData.SPminI % 60);
                this.HoraF = Math.floor(this.configData.SPminF / 60);
                this.MinuF = (this.configData.SPminF % 60);
            }
        )
    }

    actualizar() {
        this.magratheanApiService.getLiveData().subscribe(
            res => {
                this.liveData = <LiveData>res;
            }
        );
    }

    setHum() {
        console.log("Enviado SET SP Hum: " + this.configData.SpHum);
        this.magratheanApiService.setParameter("hum", this.configData.SpHum).subscribe();
    }
    setTemp() {
        console.log("Enviado SET SP Temp: " + this.configData.SpTemp);
        this.magratheanApiService.setParameter("temp1", this.configData.SpTemp).subscribe();
    }
    setMinuI() {
        console.log("Enviado SET Hora Inicio: " + (this.MinuI + 60 * this.HoraI));
        this.magratheanApiService.setParameter("MinuI", (this.MinuI + 60 * this.HoraI)).subscribe();
    }
    setMinuF() {
        console.log("Enviado SET Hora Fin: " + (this.MinuF + 60 * this.HoraF));
        this.magratheanApiService.setParameter("MinuF", (this.MinuF + 60 * this.HoraF)).subscribe();
    }

    // Si inicializo en constructor ngOnInit luego no reescribe la variable ¿por qué?

}