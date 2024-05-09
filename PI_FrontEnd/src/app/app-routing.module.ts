import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
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

const routes: Routes = [

  {
    path:"",
    component:AllTemplateFrontComponent,
    children:[
      {
        path:"home",
        component:HomeFrontComponent
      }
    ]
  },
  
  {
    path:"admin",
    component:AllTemplateBackComponent,
    children:[
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
      }
      
    ], //canActivate:[AuthGuard] //hedhi lezem na7cheha fi les liens kol
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
