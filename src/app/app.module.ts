import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LicenseAcquisitionComponent } from './license-acquisition/license-acquisition.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
    {path: '', redirectTo: '/license', pathMatch: 'full'},
    {path: 'license', component: LicenseAcquisitionComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        LicenseAcquisitionComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
