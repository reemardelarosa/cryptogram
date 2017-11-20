import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Routing
import { AppRoutingModule } from './app.routing.module';
//helpers
import { BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { fakeBackendProvider } from './helpers/index';

//Content
import { ContentDataComponent } from './components/content-data/content-data.component';

//Primary Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
//Widgets
import { ModalComponent } from './components/widgets/modal/modal.component';
import { ChartsComponent } from './components/widgets/charts/charts.component';
import { AlertComponent } from './components/widgets/alert/alert.component';

//pages
import { HomeComponent } from './components/pages/home/home.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { AboutComponent } from './components/pages/about/about.component';

//Guards 
import { AuthGuard } from './guard/auth.guard';

//Services
import { AuthService, UserService, AlertService } from './services/index.service';
import { RegisterComponent } from './components/pages/register/register.component'

//example generation
// ng g component components/pages/register --module=app.module

@NgModule({
  declarations: [
    HomeComponent,
    ErrorComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ModalComponent,
    ChartsComponent,
    ContentDataComponent,
    AboutComponent,
    AlertComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService,
    AlertService,

    //Connection
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
