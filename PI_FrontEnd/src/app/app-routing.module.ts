import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { PackCRFrontComponent } from './FrontOffice/pack-cr-front/pack-cr-front.component';
import { AjoutPackBackComponent } from './BackOffice/ajout-pack-back/ajout-pack-back.component';
import { AfficherPackBackComponent } from './BackOffice/afficher-pack-back/afficher-pack-back.component';
import { LePackFrontComponent } from './FrontOffice/le-pack-front/le-pack-front.component';
import { FormulaireCreditFrontComponent } from './FrontOffice/formulaire-credit-front/formulaire-credit-front.component';
import { CreditBackComponent } from './BackOffice/credit-back/credit-back.component';
import { GarantBackComponent } from './BackOffice/garant-back/garant-back.component';

const routes: Routes = [

  {
    path:"",
    component:AllTemplateFrontComponent,
    children:[
      {
        path:"home",
        component:HomeFrontComponent
      },
      {
        path:"PackCredit",
        component:PackCRFrontComponent
      },
      {
        path:"Pack/:id",
        component:LePackFrontComponent
      },
      {
        path:"FormulaireCredit/:id",
        component:FormulaireCreditFrontComponent
      },
    ]
  },
  
  {
    path:"admin",
    component:AllTemplateBackComponent,
    children:[
      {
        path:"ajoutPack",
        component:AjoutPackBackComponent
      },
      {
        path:"afficherPack",
        component:AfficherPackBackComponent
      },
      {
        path:"Credits",
        component:CreditBackComponent
      },
      {
        path:"Garants",
        component:GarantBackComponent
      }]
  },

  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
