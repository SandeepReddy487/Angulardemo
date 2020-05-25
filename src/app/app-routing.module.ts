import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { MformComponent } from './mform/mform.component';
import { HttpComponent } from './http/http.component';
import { ForComponent } from './for/for.component';


const routes: Routes = [
  {path:"",redirectTo:"template",pathMatch:"full"},
  {path:'template',component:TemplateComponent},
  {path:'reactive',component:ReactiveComponent},
  {path:'mform',component:MformComponent},
  {path:'http',component:HttpComponent},
  {path:'for',component:ForComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
