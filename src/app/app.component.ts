import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import { CursoAlphaService } from './services/curso-alpha.service';

@Component({
  selector: 'app-root',
  template: '<h1>KloverCode</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KloverCode';



  constructor(
    private cursoService: CursoService,
    private cursoAlphaService: CursoAlphaService
  ){
    cursoService.agregarCurso({
      nombre: 'Prueba Curso Service',
      comision: '22222',
      fechaInicio: new Date(),
      fechaFin: new Date(),
      inscripcionAbierta: true,
      profesor: {
        nombre: 'Abner',
        correo: 'abner@gmail.com',
        fechaRegistro: new Date()
      }
    });

    console.log(cursoService, cursoAlphaService)
  }

  agregarCurso(){
    let c: Curso = {
      nombre: 'Angular Anvazado',
      comision: '34022',
      fechaInicio: new Date(),
      fechaFin: new Date(),
      inscripcionAbierta: true,
      profesor: {
        nombre: 'Ulises',
        correo: 'ulises@gmail.com',
        fechaRegistro: new Date()
      }
    };
    this.cursoService.agregarCurso(c);
  }
  
}