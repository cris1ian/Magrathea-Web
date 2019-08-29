import { Component, OnInit } from '@angular/core';
import { MagratheanAPIService } from 'src/app/services/magrathean-api.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {
  parametro: string;
  valor: any;

  constructor(private magratheanApiService: MagratheanAPIService) { }

  ngOnInit(): void {}

  setParameter() {
    // console.log("Enviado SSID_name: " + this.configData.SSID_name);
    this.magratheanApiService.setParameter(this.parametro, this.valor).subscribe();
  }

}
