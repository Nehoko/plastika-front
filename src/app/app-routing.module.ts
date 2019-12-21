import { NgModule } from '@angular/core';
import { Routes, RouterModule, provideRoutes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'base', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
