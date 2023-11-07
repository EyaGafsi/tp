import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnesComponent } from './personnes/personnes.component';

const routes: Routes = [
 /* {path:'personne',component:PersonnesComponent},*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
