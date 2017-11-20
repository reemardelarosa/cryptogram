import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Guards
import { AuthGuard } from './guard/auth.guard';
//Pages
import { HomeComponent } from './components/pages/home/home.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },
  { path: 'about', component:  AboutComponent, canActivate: [AuthGuard] },
  { path: 'login', component:  LoginComponent },
  { path: 'register', component: RegisterComponent},
  // { path: 'blog/:id', component: BlogDetailsComponent },
  { path: '404', component: ErrorComponent, data: {message: 'Page not Found!'} },
  { path: '**', redirectTo: '/404' }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export  class AppRoutingModule {}