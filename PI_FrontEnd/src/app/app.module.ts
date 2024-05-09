import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { FooterBackComponent } from './BackOffice/footer-back/footer-back.component';
import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { PackAssurListComponent } from './BackOffice/pack-assur-list/pack-assur-list.component';
import {HttpClientModule} from "@angular/common/http";
import { AssurancesListComponent } from './BackOffice/assurances-list/assurances-list.component';
import { SinistresListComponent } from './BackOffice/sinistres-list/sinistres-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardAssurancesComponent } from './BackOffice/dashboard-assurances/dashboard-assurances.component';
import { PackAssurComponent } from './FrontOffice/pack-assur/pack-assur.component';
import { AddAssuranceComponent } from './FrontOffice/add-assurance/add-assurance.component';
import { AssurancesComponent } from './FrontOffice/assurances/assurances.component';
import { AddSinistreComponent } from './FrontOffice/add-sinistre/add-sinistre.component';
import { SinistresComponent } from './FrontOffice/sinistres/sinistres.component';
import { SimulateurAssuranceComponent } from './FrontOffice/similateur-assurance/simulateur-assurance.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTemplateBackComponent,
    FooterBackComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    AllTemplateFrontComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    HomeFrontComponent,
    PackAssurListComponent,
    AssurancesListComponent,
    SinistresListComponent,
    DashboardAssurancesComponent,
    PackAssurComponent,
    AddAssuranceComponent,
    AssurancesComponent,
    AddSinistreComponent,
    SinistresComponent,
    SimulateurAssuranceComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
