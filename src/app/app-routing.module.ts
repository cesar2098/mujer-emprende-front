import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagemprenComponent } from './components/pagempren/pagempren.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  {path:'',component:PrincipalComponent},
  {path:'home',component:PrincipalComponent},
  {path: 'comercio', component: PagemprenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
