import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import {PackAssurListComponent} from "./BackOffice/pack-assur-list/pack-assur-list.component";
import {AssurancesListComponent} from "./BackOffice/assurances-list/assurances-list.component";
import {SinistresListComponent} from "./BackOffice/sinistres-list/sinistres-list.component";
import {DashboardAssurancesComponent} from "./BackOffice/dashboard-assurances/dashboard-assurances.component";
import {PackAssurComponent} from "./FrontOffice/pack-assur/pack-assur.component";
import {AssurancesComponent} from "./FrontOffice/assurances/assurances.component";
import {SinistresComponent} from "./FrontOffice/sinistres/sinistres.component";
import {AddAssuranceComponent} from "./FrontOffice/add-assurance/add-assurance.component";
import {AddSinistreComponent} from "./FrontOffice/add-sinistre/add-sinistre.component";
import {SimulateurAssuranceComponent} from "./FrontOffice/similateur-assurance/simulateur-assurance.component";

const routes: Routes = [
  {
    path: '',
    component: AllTemplateFrontComponent,
    children: [
      {
        path: 'home',
        component: HomeFrontComponent,
      },
      {
        path: 'packs',
        component: PackAssurComponent,
      },
      {
        path: 'assurances',
        component: AssurancesComponent,
      },
      {
        path: 'sinistres/:idAssurance',
        component: SinistresComponent,
      },
      {
        path: 'addassurance/:idPack',
        component: AddAssuranceComponent,
      },
      {
        path: 'addsinistre/:idAssur',
        component: AddSinistreComponent,
      },
      {
        path: 'simulationassurance',
        component: SimulateurAssuranceComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AllTemplateBackComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardAssurancesComponent,
      },
      {
        path: 'packs',
        component: PackAssurListComponent,
      },
      {
        path: 'assurances',
        component: AssurancesListComponent,
      },
      {
        path: 'sinistres',
        component: SinistresListComponent,
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
