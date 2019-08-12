// Mejorar este modelo usando el constructor para que cada dato ya aparezca correctamente casteado

export class MagratheanData {
    // fecha: string;
    // hora: string;
    SpHum: number;
    SpTemp: number;
    SPminI: number;
    SPminF: number;
    // SpHfl: number;
    // SpMfl: number;
    tempDht: number;
    tempLm35: number;
    // tempRtc: number;
    humDht: number;
    lampara: boolean;
    ventilador: boolean;
    riego: boolean;
    SSID_name: string;
    SSID_pass: string;

    newSpHum: number;
    newSpTemp: number;
    newSPminI: number;
    newSPhorI: number;
    newSPminF: number;
    newSPhorF: number;
    newSsidName: String;
    newSsidPass: String;


    // constructor(data) {
    //     this.SpHum = data.SpHum;
    //     this.lampara = data.lampara === '0' ? false : true;
    // }
}