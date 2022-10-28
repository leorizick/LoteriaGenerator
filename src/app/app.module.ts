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
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SobreComponent } from './pages/sobre/sobre.component';
import {MatCardModule} from '@angular/material/card';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ListGameMethodComponent,
    HeaderComponent,
    MegaSenaComponent,
    LotofacilComponent,
    QuinaComponent,
    SobreComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
