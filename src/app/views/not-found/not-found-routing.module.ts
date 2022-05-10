import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewsNotFoundComponent} from "./views-not-found/views-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: ViewsNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule { }
