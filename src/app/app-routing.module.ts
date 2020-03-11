import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { CreatePlayerComponent } from './create-player/create-player.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'create-player', component: CreatePlayerComponent},
  {path: 'update-player', component: UpdatePlayerComponent},
  {path: 'update-player/:id', component: UpdatePlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingModule = RouterModule.forRoot(routes);
