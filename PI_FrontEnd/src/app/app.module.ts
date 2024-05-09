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
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './PagesAuthentification/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { NotFoundComponent } from './not-found/not-found.component';
import { GestionUserComponent } from './BackOffice/gestion-user/gestion-user.component';
import { RegisterComponent } from './PagesAuthentification/register/register.component';
import { HttpErrorInterceptor } from './Helper/interceptors/http-error.interceptor';
import { UserDetailsComponent } from './BackOffice/user-details/user-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserStatComponent } from './BackOffice/user-stat/user-stat.component';
import { ProfilBackComponent } from './BackOffice/profil-back/profil-back.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ForgotPasswordComponent } from './PagesAuthentification/forgot-password/forgot-password.component';
import { SetPasswordComponent } from './PagesAuthentification/set-password/set-password.component';










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
    LoginComponent,
    NotFoundComponent,
    GestionUserComponent,
    RegisterComponent,
    UserDetailsComponent,
    UserStatComponent,
    ProfilBackComponent,
    ForgotPasswordComponent,
    SetPasswordComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxCaptchaModule
    
    
    
    
    
    
  ],
  providers: [
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true } ,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
