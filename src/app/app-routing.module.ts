import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchListComponent } from './components/launch-list/launch-list.component';
import { ListItemDetailComponent } from './components/list-item-detail/list-item-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'launchlist', component: LaunchListComponent },
  { path: 'launchlist/:id', component: ListItemDetailComponent },
  { path: '', redirectTo: '/launchlist', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
