import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ButtonEventsComponent} from './button-events/button-events.component';
import{HomeComponent} from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const urlroutes: Routes = [
  {
    path:'btn-events',
    component: ButtonEventsComponent
  },
  {
    path:'services',
    component: ButtonEventsComponent
  },
  {
    path:'Login',
    component: HomeComponent
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(urlroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
