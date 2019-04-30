import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementComponent } from './element/element.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';


 
const routes: Routes = [
  {path: 'about', component: ElementComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
