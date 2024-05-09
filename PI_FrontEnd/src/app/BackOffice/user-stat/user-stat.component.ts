import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AgeGroupStatisticsDto, GenderStatisticsDto } from 'src/app/services/models';
import { AdminService } from 'src/app/services/services/admin/admin.service';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-user-stat',
  templateUrl: './user-stat.component.html',
  styleUrls: ['./user-stat.component.css']
})
export class UserStatComponent {
  ageMoyen: number | undefined;
  nbreTotalUtilisateurs: number | undefined;
  salaireMoyen: number | undefined;
  genderStatistics: GenderStatisticsDto | undefined;
  AgeStatistics: AgeGroupStatisticsDto | undefined;
  nbreTotalCo:number | undefined;


  constructor(private adminservice:AdminService, private route:Router){}
  ngOnInit(): void {
    this.getAgeMoyenUsers();
    this.getnbrenUsers();
    this.getsalaireMoyen();
    this.getGenderStatistics();
    this.getTrancheAge();
    this.getnbreco();
  }
  getAgeMoyenUsers() {
    this.adminservice.AgeMoyenUsers().subscribe(
      (ageMoyen: any) => { 
        this.ageMoyen = ageMoyen;
      },
      (error: any) => {
        console.error('Une erreur est survenue lors de la récupération de l\'âge moyen des utilisateurs :', error);
      }
    );
  }
  getnbrenUsers() {
    this.adminservice.nbreTotalUser().subscribe(
      (nbre: any) => { 
        this.nbreTotalUtilisateurs = nbre;
      },
      (error: any) => {
        console.error('Une erreur est survenue lors de la récupération du nbre total des utilisateurs :', error);
      }
    );
  }
  getsalaireMoyen() {
    this.adminservice.salaireMoyen().subscribe(
      (nbre: any) => { 
        this.salaireMoyen = nbre;
      },
      (error: any) => {
        console.error('Une erreur est survenue lors de la récupération du nbre total des utilisateurs :', error);
      }
    );
  }
  getGenderStatistics(): void {
    this.adminservice.GenderStat().subscribe(
      (statistics: GenderStatisticsDto) => {
        this.genderStatistics = statistics;
        this.renderChart({
          'Femmes': statistics.pourcentageFemmes || 0,
          'Hommes': statistics.pourcentageHommes || 0
        });
        console.log(this.genderStatistics);
      },
      (error: any) => {
        console.error('Une erreur est survenue lors de la récupération des statistiques sur le genre :', error);
      }
    );
  }
  getTrancheAge(): void{
    this.adminservice.TrancheAgeStat().subscribe(
      (statistics: AgeGroupStatisticsDto) => {
        this.AgeStatistics = statistics;
        this.renderChart1({
          'Jeunes Adultes (18-35 ans)': statistics.pourcentageJeunesAdultes || 0,
          'Adultes(36-65 ans)': statistics.pourcentageAdultes || 0,
          'Aines Troisieme Age (66-80 ans)': statistics.pourcentageAinesTroisiemeAge || 0,
          'Aines Quatrieme Age (>80ans)': statistics.pourcentageAinesQuatriemeAge || 0
        });
        console.log(this.AgeStatistics);
      },
      (error: any) => {
        console.error('Une erreur est survenue lors de la récupération des statistiques sur le genre :', error);
      }
    );
  }
  getnbreco() {
    this.adminservice.nbrConnexionJournaliere().subscribe(
      (nbre: any) => { 
        this.nbreTotalCo = nbre;
      },
      (error: any) => {
        console.error('Une erreur est survenue lors de la récupération du nbre total des utilisateurs :', error);
      }
    );
  }
  
  renderChart(counts: { [key: string]: number }): void {
    const chartOptions = {
      series: [] as number[],
      labels: [] as string[],
      chart: {
        type: 'pie',
        height: 350
      },
      title: {
        text: 'Répartition par genre',
        align: 'left'
      },
      colors: ['#FF9999', '#99CCFF'],
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

    const chartElement = document.querySelector('#genderchart');
    if (chartElement) {
      const chart = new ApexCharts(chartElement as HTMLElement, chartOptions);
      chart.render();
    }
  }
  renderChart1(counts: { [key: string]: number }): void {
    const chartOptions = {
      series: [] as number[],
      labels: [] as string[],
      chart: {
        type: 'donut',
        height: 350
      },
      title: {
        text: 'Répartition par Age',
        align: 'left'
      },
      colors: ['#FFA07A', '#6495ED', '#FFD700', '#A9A9A9'],
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

    const chartElement = document.querySelector('#agechart');
    if (chartElement) {
      const chart = new ApexCharts(chartElement as HTMLElement, chartOptions);
      chart.render();
    }
  }

}
