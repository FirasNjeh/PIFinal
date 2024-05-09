import {Component, OnInit} from '@angular/core';
import {PackAssurService} from "../../Services/pack-assur.service";
import * as ApexCharts from "apexcharts";
import {AssuranceService} from "../../Services/assurance.service";
import {SinistreService} from "../../Services/sinistre.service";

@Component({
  selector: 'app-dashboard-assurances',
  templateUrl: './dashboard-assurances.component.html',
  styleUrls: ['./dashboard-assurances.component.css']
})
export class DashboardAssurancesComponent implements OnInit {
  packsAssur!: any[];
  assurances: any[] = [];
  sinistres: any[] = [];


  constructor(private packAssurService: PackAssurService,
              private assuranceService: AssuranceService,
              private sinistreService: SinistreService ) { }

  ngOnInit(): void {
    this.getAllPacksAssur();
    this.getAllAssurances();
    this.getAllSinistres();
    //this.getPackAssurAssuranceCounts();
  }

  getAllPacksAssur() {
    this.packAssurService.findAllPacksAssur().subscribe(
      (packsAssur: any[]) => {
        this.packsAssur = packsAssur;
        this.renderPacksByTypeChart();
        console.log('All PacksAssur fetched successfully!');
      },
      (error) => {
        console.error('Error in fetching AllPacksAssur:', error);
      }
    );
  }

  getAllAssurances() {
    this.assuranceService.findAllAssurances().subscribe(
      (assurances) => {
        this.assurances=assurances;
        this.renderAssurancesByTypeChart();
        this.renderAssurancesChart2();
        console.log('All assurances fetched successfully:');
      },
      (error) => {
        console.error('Error in fetching all assurances:', error);
      }
    );
  }

  getAllSinistres() {
    this.sinistreService.findAllSinistres().subscribe(
      (sinistres) => {
        this.sinistres = sinistres;
        this.renderSinistresByTypeChart();
        this.renderSinistresChart();
        console.log('All sinistres fetched successfully:');
      },
      (error) => {
        console.error('Error fetching all sinistres:', error);
      }
    );
  }


  getPackAssurAssuranceCounts() {
    this.packAssurService.getPackAssurAssuranceCounts().subscribe(
      (counts: any) => {
        console.log('PackAssur assurance counts fetched successfully!', counts);
        this.renderAssurancesChart(counts);
      },
      (error) => {
        console.error('Error in fetching PackAssur assurance counts:', error);
      }
    );
  }



  renderPacksByTypeChart(): void {
    const chartOptions = {
      series: [this.packsAssur.filter((pack) => pack.packAssurance === 'AGRICOLE').length,
      this.packsAssur.filter((pack) => pack.packAssurance === 'SANTE').length,
      this.packsAssur.filter((pack) => pack.packAssurance === 'ENTREPRENEUR').length,
      this.packsAssur.filter((pack) => pack.packAssurance === 'SCOLAIRE').length],
      labels: ["AGRICOLE","SANTE","ENTREPRENEUR","SCOLAIRE"],
      chart: {
        type: 'donut',
        height: 350
      },
      title: {
        text: 'Packs by type',
        align: 'left'
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    const chartElement = document.querySelector('#PacksByTypeChart');
    if (chartElement) {
      const chart = new ApexCharts(chartElement as HTMLElement, chartOptions);
      chart.render();
    }
  }

  renderAssurancesByTypeChart(): void {
    const chartOptions = {
      series: [this.assurances.filter((assurance) => assurance.packAssur.packAssurance === 'AGRICOLE').length,
        this.assurances.filter((assurance) => assurance.packAssur.packAssurance === 'SANTE').length,
        this.assurances.filter((assurance) => assurance.packAssur.packAssurance === 'ENTREPRENEUR').length,
        this.assurances.filter((assurance) => assurance.packAssur.packAssurance === 'SCOLAIRE').length],
      labels: ["AGRICOLE","SANTE","ENTREPRENEUR","SCOLAIRE"],
      chart: {
        type: 'donut',
        height: 350
      },
      title: {
        text: 'Assurances by type',
        align: 'left'
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    const chartElement = document.querySelector('#AssurancesByTypeChart');
    if (chartElement) {
      const chart = new ApexCharts(chartElement as HTMLElement, chartOptions);
      chart.render();
    }
  }

  renderSinistresByTypeChart(): void {
    const chartOptions = {
      series: [this.sinistres.filter((sinistre) => sinistre.assurance.packAssur.packAssurance === 'AGRICOLE').length,
        this.sinistres.filter((sinistre) => sinistre.assurance.packAssur.packAssurance === 'SANTE').length,
        this.sinistres.filter((sinistre) => sinistre.assurance.packAssur.packAssurance === 'ENTREPRENEUR').length,
        this.sinistres.filter((sinistre) => sinistre.assurance.packAssur.packAssurance === 'SCOLAIRE').length],
      labels: ["AGRICOLE","SANTE","ENTREPRENEUR","SCOLAIRE"],
      chart: {
        type: 'donut',
        height: 350
      },
      title: {
        text: 'Sinistres by type',
        align: 'left'
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    const chartElement = document.querySelector('#SinistresByTypeChart');
    if (chartElement) {
      const chart = new ApexCharts(chartElement as HTMLElement, chartOptions);
      chart.render();
    }
  }

  renderAssurancesChart(counts: { [key: string]: number }): void {
    const chartOptions = {
      series: [] as number[],
      labels: [] as string[],
      chart: {
        type: 'donut',
        height: 350
      },
      title: {
        text: 'Assurances by packs',
        align: 'left'
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    for (const [label, value] of Object.entries(counts)) {
      chartOptions.labels.push(label);
      chartOptions.series.push(value);
    }

    const chartElement = document.querySelector('#assurancesChart');
    if (chartElement) {
      const chart = new ApexCharts(chartElement as HTMLElement, chartOptions);
      chart.render();
    }
  }

  renderAssurancesChart2(): void {
    const uniqueLabels = new Set(this.assurances.map(assurance => assurance.packAssur.nom));
    const labels = [...uniqueLabels];
    const series = labels.map(label => this.assurances.filter(assurance => assurance.packAssur.nom === label).length);

    const chartOptions = {
      series: series,
      labels: labels,
      chart: {
        type: 'donut',
        height: 350
      },
      title: {
        text: 'Assurances by packs',
        align: 'left'
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    const chartElement = document.querySelector('#assurancesChart');
    if (chartElement) {
      const chart = new ApexCharts(chartElement as HTMLElement, chartOptions);
      chart.render();
    }
  }

  renderSinistresChart(): void {
    const uniqueLabels = new Set(this.sinistres.map(sinistre => sinistre.assurance.packAssur.nom));
    const labels = [...uniqueLabels];
    const series = labels.map(label => this.sinistres.filter(sinistre => sinistre.assurance.packAssur.nom === label).length);

    const chartOptions = {
      series: series,
      labels: labels,
      chart: {
        type: 'donut',
        height: 350
      },
      title: {
        text: 'Sinistres by packs',
        align: 'left'
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    const chartElement = document.querySelector('#sinistresChart');
    if (chartElement) {
      const chart = new ApexCharts(chartElement as HTMLElement, chartOptions);
      chart.render();
    }
  }

}
