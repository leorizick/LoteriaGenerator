import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGameMethodComponent } from './components/list-game-method/list-game-method.component';
import { LotofacilComponent } from './pages/lotofacil/lotofacil.component';
import { MegaSenaComponent } from './pages/mega-sena/mega-sena.component';
import { QuinaComponent } from './pages/quina/quina.component';

const routes: Routes = [
  {path: '', component: ListGameMethodComponent},
  {path: 'megaSena', component: MegaSenaComponent},
  {path: 'lotofacil', component: LotofacilComponent},
  {path: 'quina', component: QuinaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
