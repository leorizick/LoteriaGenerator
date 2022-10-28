import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListGameMethodComponent } from './components/list-game-method/list-game-method.component';
import { HeaderComponent } from './components/header/header.component';
import { MegaSenaComponent } from './pages/mega-sena/mega-sena.component';

@NgModule({
  declarations: [
    AppComponent,
    ListGameMethodComponent,
    HeaderComponent,
    MegaSenaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
