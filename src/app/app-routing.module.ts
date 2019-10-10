import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchListComponent } from './components/launch-list/launch-list.component';
import { ListItemDetailComponent } from './components/list-item-detail/list-item-detail.component';

const routes: Routes = [
  { path: '', component: LaunchListComponent },
  { path: ':id', component: ListItemDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
