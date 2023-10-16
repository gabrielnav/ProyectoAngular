import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CursoService } from 'src/app/services/curso.service';
import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';
import { MaterialModule } from './material.module';
import { EditarCursoDialogComponent } from './components/editar-curso-dialog/editar-curso-dialog.component';
import { OrmatoFechaPipe } from './pipes/ormato-fecha.pipe';
import { BooleanoATextoPipe } from './pipes/booleano-a-texto.pipe';
import { BooleanoEstiloDirective } from './directives/booleano-estilo.directive';
import { FiltroCursosPipe } from './pipes/filtro-cursos.pipe';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { CursoAlphaService } from './services/curso-alpha.service';
import { cursos } from './services/curso.data';
import { env } from 'src/environments/environment';
import { config, token } from './config';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ListaCursosComponent,
    LoginComponent,
    NavbarComponent,
    ToolbarComponent,
    FormularioReactivoComponent,
    TablaCursosComponent,
    EditarCursoDialogComponent,
    OrmatoFechaPipe,
    BooleanoATextoPipe,
    BooleanoEstiloDirective,
    FiltroCursosPipe,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  
  ],
  providers: [
    // CursoService,
    // {provide: CursoService, useExisting: CursoAlphaService}
    // {provide: CursoService, useClass: CursoAlphaService}
    // {provide: CursoService, useValue: cursos}
    {provide: CursoService, useFactory: ()=>{
      if(env.utilizarServicioAlpha == 'Alpha'){
        return new CursoAlphaService()
      }else if(env.utilizarServicioAlpha == 'Legacy'){
        return cursos
      }else{
        return new CursoService()
      }
    }
    },
    { provide: token, useValue: config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }