import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGameMethodComponent } from './components/list-game-method/list-game-method.component';
import { MegaSenaComponent } from './pages/mega-sena/mega-sena.component';

const routes: Routes = [
  {path: '', component: ListGameMethodComponent},
  {path: 'megaSena', component: MegaSenaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }