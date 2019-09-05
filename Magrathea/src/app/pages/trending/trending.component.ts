import { Component, OnInit } from '@angular/core';
import { MagratheanAPIService } from 'src/app/services/magrathean-api.service';
import { Papa } from 'ngx-papaparse';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-trending',
    templateUrl: './trending.component.html',
    styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
    temp: number[] = [];
    tempLm35: number[] = [];
    humi: number[] = [];
    timeline: number[] = [];
    chart: Chart;

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
                result.data.forEach((element: number[], index: number) => {
                    this.timeline.push(index);
                    this.temp.push(element[0]);
                    this.tempLm35.push(element[1]);
                    this.humi.push(element[2]);
                });
                this.initChart();
                console.log(this.timeline);
                console.log(this.temp);
                console.log(this.humi);
            }
        });
    }

    initChart() {
        this.chart = new Chart('canvas', {
            type: 'line',
            data: {
                labels: this.timeline,
                datasets: [
                    {
                        data: this.temp,
                        borderColor: "#3cba9f",
                        fill: false
                    },
                    {
                        data: this.humi,
                        borderColor: "#ffcc00",
                        fill: false
                    },
                ]
            },
            options: {
                legend: {
                    display: true
                },
                scales: {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        display: true
                    }],
                }
            }

        });
    }
}