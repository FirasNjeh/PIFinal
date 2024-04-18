import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';

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
    component:AllTemplateBackComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
