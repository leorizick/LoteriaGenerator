import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListGameMethodComponent } from './components/list-game-method/list-game-method.component';
import { HeaderComponent } from './components/header/header.component';
import { MegaSenaComponent } from './pages/mega-sena/mega-sena.component';
import {MatButtonModule} from '@angular/material/button';
import { LotofacilComponent } from './pages/lotofacil/lotofacil.component';
import { QuinaComponent } from './pages/quina/quina.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListGameMethodComponent,
    HeaderComponent,
    MegaSenaComponent,
    LotofacilComponent,
    QuinaComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
