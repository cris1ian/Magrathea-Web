import { Component, OnInit } from '@angular/core';
import { MagratheanAPIService } from 'src/app/services/magrathean-api.service';
import { ConfigData } from 'src/app/models/config-data.model';
import { FormControl, Validators } from '@angular/forms';

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

  setWifi() {
    // console.log("Enviado SSID_name: " + this.configData.SSID_name);
    this.magratheanApiService.setParameter2("SSID_name", this.configData.SSID_name, "SSID_pass", this.configData.SSID_pass).subscribe();
  }

}
