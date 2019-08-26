import { Component, OnInit } from '@angular/core';
import { MagratheanAPIService } from 'src/app/services/magrathean-api.service';
// import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  data: any;

  constructor(private magratheanApiService: MagratheanAPIService) { }

  ngOnInit(): void {
    this.getTrending();
  }

  getTrending() {
    this.magratheanApiService.getTrending()
      .subscribe(res => {
        this.data = res;
        console.log(res);
      });
  }

}
