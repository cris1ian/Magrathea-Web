import { Component, OnInit } from '@angular/core';
import { MagratheanAPIService } from 'src/app/services/magrathean-api.service';
import { Papa } from 'ngx-papaparse';

@Component({
    selector: 'app-trending',
    templateUrl: './trending.component.html',
    styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
    data: number[];

    constructor(private magratheanApiService: MagratheanAPIService, private papa: Papa) {
    }

    ngOnInit(): void {
        this.getTrending();
    }

    getTrending() {
        this.magratheanApiService.getTrending()
            .subscribe(res => {
                this.parseCSV(res);
            });
    }

    parseCSV(csvData) {
        this.papa.parse(csvData, {
            complete: (result) => {
                this.data = result.data;
                console.log(this.data);
            }
        });
    }

}
