import { Component } from '@angular/core';
import { PackCR } from 'src/app/model/PackCR';
import { PackCrBackService } from '../service/pack-cr-back.service';
import { Observable, catchError, throwError } from 'rxjs';


@Component({
  selector: 'app-afficher-pack-back',
  templateUrl: './afficher-pack-back.component.html',
  styleUrls: ['./afficher-pack-back.component.css']
})
export class AfficherPackBackComponent {
  pack$: Observable<PackCR[]> |undefined; // Change pack to pack$

  errorMessage: Object | undefined;
  
  constructor(private packcrf: PackCrBackService){}

  ngOnInit(): void {
    this.getPacks(); // Call getPacks() in ngOnInit
  }

  getPacks(): void {
    this.pack$ = this.packcrf.afficherPackCR().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }

}
