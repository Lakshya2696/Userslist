import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { PgnfoundComponent } from './pgnfound/pgnfound.component';
import { ServicesComponent } from './services/services.component';
import { WrokoutsComponent } from './wrokouts/wrokouts.component';
import { CommonModule } from '@angular/common';



const routes : Routes= [];

 



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


