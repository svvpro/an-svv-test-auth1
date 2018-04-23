import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AuthComponent} from './auth/auth.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {AboutComponent} from './about/about.component';
import {NewsComponent} from './news/news.component';
import {NavigationComponent} from './navigation/navigation.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';

const appRoutes: Routes = [
    {path: '', component: AboutComponent, canActivate: [AuthGuard]},
    {path: 'news', component: NewsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        LoginComponent,
        LogoutComponent,
        AboutComponent,
        NewsComponent,
        NavigationComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        FormsModule
    ],
    providers: [AuthService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
