import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogService } from './shared/log.service';
import { CursosComponent } from './cursos/cursos.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { ReceberCursoCriadoComponent } from './receber-curso-criado/receber-curso-criado.component';
//import { CursosService } from './cursos/cursos.service';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LogService//, 
    //CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
