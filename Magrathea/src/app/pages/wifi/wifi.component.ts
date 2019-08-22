import { Component, OnInit } from '@angular/core';
import { MagratheanAPIService } from 'src/app/services/magrathean-api.service';
import { ConfigData } from 'src/app/models/config-data.model';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.scss']
})
export class WifiComponent implements OnInit {
  configData: ConfigData;

  constructor(private magratheanApiService: MagratheanAPIService) { }

  ngOnInit(): void {
    this.magratheanApiService.getConfig().subscribe(
        res => {
            this.configData = <ConfigData>res;
        }
    )
}

actualizar() {
  console.log("You hadn't coded me yet boy")
}

setWiFi() {
    console.log("Enviados Parametros WiFi: SSID " + this.configData.SSID_name + " Pass " + this.configData.SSID_pass);
    // this.magratheanApiService.setParameter("SSID_name", this.magratheanData.newSsidName).subscribe();
}

}
