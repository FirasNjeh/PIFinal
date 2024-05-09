/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';


registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cWWJCe0x0TXxbf1x0ZFJMZVtbRHFPMyBoS35RckVnW3deeHRQRWhUUkBx');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
