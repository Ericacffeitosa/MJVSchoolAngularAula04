import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ListaColaboradoresComponent } from './features/lista-colaboradores/lista-colaboradores.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    ListaColaboradoresComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule      
  ],
  
  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
