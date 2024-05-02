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
import { PackCRFrontComponent } from './FrontOffice/pack-cr-front/pack-cr-front.component';
import { HeadFrontComponent } from './FrontOffice/head-front/head-front.component';
import { HttpClientModule } from '@angular/common/http';
import { AjoutPackBackComponent } from './BackOffice/ajout-pack-back/ajout-pack-back.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AfficherPackBackComponent } from './BackOffice/afficher-pack-back/afficher-pack-back.component';
import { LePackFrontComponent } from './FrontOffice/le-pack-front/le-pack-front.component';
import { FormulaireCreditFrontComponent } from './FrontOffice/formulaire-credit-front/formulaire-credit-front.component';
import { CreditBackComponent } from './BackOffice/credit-back/credit-back.component';
import { GarantBackComponent } from './BackOffice/garant-back/garant-back.component';
import { CreditFrontComponent } from './FrontOffice/credit-front/credit-front.component';
import { LeCreditFrontComponent } from './FrontOffice/le-credit-front/le-credit-front.component';
import { MonthlyPaymentFrontComponent } from './FrontOffice/monthly-payment-front/monthly-payment-front.component';
import { AdminComponent } from './BackOffice/admin/admin.component';
import { LeCreditBackComponent } from './BackOffice/le-credit-back/le-credit-back.component';
import { SimulateurCreditComponent } from './FrontOffice/simulateur-credit/simulateur-credit.component';
import { SalaireComponent } from './FrontOffice/salaire/salaire.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { DatePipe } from '@angular/common';



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
    PackCRFrontComponent,
    HeadFrontComponent,
    AjoutPackBackComponent,
    AfficherPackBackComponent,
    LePackFrontComponent,
    FormulaireCreditFrontComponent,
    CreditBackComponent,
    GarantBackComponent,
    CreditFrontComponent,
    LeCreditFrontComponent,
    MonthlyPaymentFrontComponent,
    AdminComponent,
    LeCreditBackComponent,
    SimulateurCreditComponent,
    SalaireComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    
  ],
  providers: [DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
