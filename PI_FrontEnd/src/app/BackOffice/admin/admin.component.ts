import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { Observable, catchError, map, throwError } from 'rxjs';
import { TransactionCredit } from 'src/app/model/TransactionCredit';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  nbr!: number;
  total!:number;
  clo!:number;
  act$:Observable<TransactionCredit[]> |undefined;
  errorMessage: any;
  @ViewChild('activityCard') activityCard!: ElementRef;

  constructor(private service: AdminService, private router :Router,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getTotal();
    this.getNbrC();
    this.getClo();
    this.getAct();
    this.getPackCreditCounts();
    

  };

  getTotal(): void {
    this.service.getTotal().subscribe(nbr => this.nbr = nbr);

    console.log('le montant  est : ' + this.nbr);

  }

  getNbrC(): void {
    this.service.getNbrC().subscribe(total => this.total = total);

    console.log('le nbr credit est : ' + this.total);

  }

  getClo(): void {
    this.service.getClo().subscribe(clo => this.clo = clo);

    console.log('le nbr credit clo est : ' + this.clo);

  }

  getAct(): void {
    this.act$ = this.service.getAct().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }
  ngAfterViewInit(): void {
    this.act$ = this.service.getAct();
    this.act$.pipe(
      map(acts => {
        if (acts) {
          const cardHeight = Math.min(acts.length, 10) * 2.22; // Hauteur approximative d'une ligne multipliée par le nombre maximum de lignes souhaité (7)
          this.activityCard.nativeElement.style.maxHeight = `${cardHeight}rem`;
        }
      })
    ).subscribe();
  }

  getPackCreditCounts() {
    this.service.getPackCreditCounts().subscribe(
      (counts: any) => {
        console.log('Pack Credit counts fetched successfully!', counts);
        this.renderChart(counts);
      },
      (error) => {
        console.error('Error in fetching Pack Credit counts:', error);
      }
    );
  }

  renderChart(counts: { [key: string]: number }): void {
    console.log('Rendering chart with counts:', counts);

    const chartOptions = {
        series: [] as number[],
        labels: [] as string[],
        chart: {
            type: 'donut',
            height: 500,
            // width: '100%',
        },
        title: {
            text: 'Credits by type',
            align: 'center', // Align the title to the center
        },
        legend: {
            position: 'bottom', // Set legend position here
            horizontalAlign: 'center', // Center the legend horizontally
            offsetY: 5, // Adjust vertical position of the legend
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                },
            },
        ],
    };

    for (const [label, value] of Object.entries(counts)) {
        chartOptions.labels.push(label);
        chartOptions.series.push(value);
    }

    console.log('Chart options:', chartOptions);

    const chartElement = document.querySelector('#chart');
    console.log('Chart element:', chartElement);

    if (chartElement) {
        const chart = new ApexCharts(chartElement as HTMLElement, chartOptions);
        console.log('Chart object:', chart);
        chart.render();
        console.log('Chart rendered successfully.');
    } else {
        console.error('Chart element not found.');
    }
}




}
