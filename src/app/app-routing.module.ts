import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddDataComponent } from './add-data/add-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add',
    component: AddDataComponent
  },
  {
    path: 'edit',
    component: EditDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
