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
    bothFiles: boolean = false;
    temp: number[] = [];
    tempLm35: number[] = [];
    humi: number[] = [];
    timeline: number[] = [];
    chartHum: Chart;
    chartTemp: Chart;
    arrLength: number = 0;

    constructor(private magratheanApiService: MagratheanAPIService, private papa: Papa) {
    }

    ngOnInit(): void {
        this.getTrending();
    }

    getTrending() {
        this.magratheanApiService.getTrendingOld()
            .subscribe(res => {
                this.parseCSV(res);
                this.magratheanApiService.getTrendingRecent()
                    .subscribe(res => {
                        this.parseCSV(res);
                    });
            });
    }

    parseCSV(csvData) {
        this.papa.parse(csvData, {
            complete: (result) => {
                result.data.forEach((element: number[], index: number) => {
                    if (element[0] != 0 && element[2] != 0) {
                        this.timeline.push(this.arrLength + index);
                        this.temp.push(element[0]);
                        this.tempLm35.push(element[1]);
                        this.humi.push(element[2]);
                    }
                });
                this.arrLength = this.timeline.length;
                if (this.bothFiles) this.initChart();
                this.bothFiles = true;
            }
        });
    }

    initChart() {
        this.chartTemp = new Chart('canvasTemp', {
            type: 'line',
            data: {
                labels: this.timeline,
                datasets: [
                    {
                        yAxisID: 'yTemperatura',
                        data: this.temp,
                        borderColor: "#ff0000",
                        label: "Temperatura",
                        fill: false,
                        borderWidth: 1
                    }
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
                        id: 'yTemperatura',
                        display: true,
                        ticks: {
                            suggestedMin: 10,
                            suggestedMax: 30
                        }
                    }]
                },
                elements: { point: { radius: 0 } }
            }
        });

        this.chartHum = new Chart('canvasHum', {
            type: 'line',
            data: {
                labels: this.timeline,
                datasets: [
                    {
                        yAxisID: 'yHumedad',
                        data: this.humi,
                        borderColor: "#00aaaa",
                        label: "Humedad",
                        fill: false,
                        borderWidth: 1
                    }
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
                        id: 'yHumedad',
                        display: true,
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 100
                        }
                    }],
                },
                elements: { point: { radius: 0 } }
            }
        });
    }
}