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
import { CreditFrontComponent } from './FrontOffice/credit-front/credit-front.component';
import { LeCreditFrontComponent } from './FrontOffice/le-credit-front/le-credit-front.component';
import { MonthlyPaymentFrontComponent } from './FrontOffice/monthly-payment-front/monthly-payment-front.component';
import { AdminComponent } from './BackOffice/admin/admin.component';
import { LeCreditBackComponent } from './BackOffice/le-credit-back/le-credit-back.component';
import { SimulateurCreditComponent } from './FrontOffice/simulateur-credit/simulateur-credit.component';
import { SalaireComponent } from './FrontOffice/salaire/salaire.component';
import { SimulateursComponent } from './FrontOffice/simulateurs/simulateurs.component';
import { TableAmortissementComponent } from './FrontOffice/table-amortissement/table-amortissement.component';
import { LoginComponent } from './PagesAuthentification/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GestionUserComponent } from './BackOffice/gestion-user/gestion-user.component';
import { RegisterComponent } from './PagesAuthentification/register/register.component';
import { AuthGuard } from './Helper/guards/auth.guard';
import { UserDetailsComponent } from './BackOffice/user-details/user-details.component';
import { UserStatComponent } from './BackOffice/user-stat/user-stat.component';
import { ProfilBackComponent } from './BackOffice/profil-back/profil-back.component';
import { ForgotPasswordComponent } from './PagesAuthentification/forgot-password/forgot-password.component';
import { SetPasswordComponent } from './PagesAuthentification/set-password/set-password.component';
import { ProfileFrontComponent } from './FrontOffice/profile-front/profile-front.component';
import { DashboardAssurancesComponent } from './BackOffice/dashboard-assurances/dashboard-assurances.component';
import { PackAssurListComponent } from './BackOffice/pack-assur-list/pack-assur-list.component';
import { AssurancesListComponent } from './BackOffice/assurances-list/assurances-list.component';
import { SinistresListComponent } from './BackOffice/sinistres-list/sinistres-list.component';
import { PackAssurComponent } from './FrontOffice/pack-assur/pack-assur.component';
import { AssurancesComponent } from './FrontOffice/assurances/assurances.component';
import { SinistresComponent } from './FrontOffice/sinistres/sinistres.component';
import { AddAssuranceComponent } from './FrontOffice/add-assurance/add-assurance.component';
import { AddSinistreComponent } from './FrontOffice/add-sinistre/add-sinistre.component';
import { SimulateurAssuranceComponent } from './FrontOffice/similateur-assurance/simulateur-assurance.component';

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
        path: 'packs',
        component: PackAssurComponent,canActivate:[AuthGuard],
      },
      {
        path: 'assurances',
        component: AssurancesComponent,canActivate:[AuthGuard],
      },
      {
        path: 'sinistres/:idAssurance',
        component: SinistresComponent,canActivate:[AuthGuard],
      },
      
      {
        path: 'addsinistre/:idAssur',
        component: AddSinistreComponent,canActivate:[AuthGuard],
      },
      {
        path: 'simulationassurance',
        component: SimulateurAssuranceComponent,canActivate:[AuthGuard],
      },
      {
        path:"profilUser",
        component:ProfileFrontComponent,canActivate:[AuthGuard],
      },
      {
        path:"Simulateurs",
        component:SimulateursComponent,canActivate:[AuthGuard],
      },
      {
        path:"TableauAmortissement/:id",
        component:TableAmortissementComponent,canActivate:[AuthGuard],
      },
     
      {
        path:"PackCredit",
        component:PackCRFrontComponent,canActivate:[AuthGuard],
      },
      {
        path:"Pack/:id",
        component:LePackFrontComponent,canActivate:[AuthGuard],
      },
      {
        path:"FormulaireCredit/:id",
        component:FormulaireCreditFrontComponent,canActivate:[AuthGuard],
      },
      {
        path:"SimulateurCredit",
        component:SimulateurCreditComponent,canActivate:[AuthGuard],
      },
      {
        path:"Salaire",
        component:SalaireComponent,canActivate:[AuthGuard],
      },
      {
        path:"Credits/:id",
        component:CreditFrontComponent,canActivate:[AuthGuard],
      },
      {
        path:"Credit/:id",
        component:LeCreditFrontComponent,canActivate:[AuthGuard],
      }
    ]
  }, {
    path:"MonthlyPayment/:id",
    component:MonthlyPaymentFrontComponent,canActivate:[AuthGuard],
  },{
    path: 'addassurance/:idPack',
    component: AddAssuranceComponent,canActivate:[AuthGuard],
  },
  
  {
    path:"admin",
    component:AllTemplateBackComponent,
    children:[
    
      {
        path:"",
        component:AdminComponent
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
        path:"Creditc/:id",
        component:LeCreditBackComponent
      },
      {
        path:"Garants",
        component:GarantBackComponent
      },
      {
        path:"user/:id",
        component:UserDetailsComponent
      },
      {
        path:"users",
        component:GestionUserComponent,
      },
      {
        path:"stat",
        component:UserStatComponent,
      },
      {
        path:"profil",
        component:ProfilBackComponent,
      },
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
    ],canActivate:[AuthGuard] //hedhi lezem na7cheha fi les liens kol,
  }, 

      
      
    
  
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"setPassword",
    component:SetPasswordComponent
  },
  {
    path:"forgotPassword",
    component:ForgotPasswordComponent
  },
  {
    path:"**",
    component:NotFoundComponent
  }
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
