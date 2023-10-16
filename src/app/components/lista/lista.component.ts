import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/alumnos';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.css']
})
export class ListaComponent{

    alumnos: Alumno[] = [
        {
          nombre: 'Gabriel Navarro',
          edad: '22',
          curso: ['Desarrollo web', 'Javascript'],
          aprobado: false
        },{
            nombre: 'Maria Tolosa',
            edad: '20',
            curso: ['React js', 'Angular', 'Vue js'],
            aprobado: true
        },{
            nombre: 'Mariano Paz',
            edad: '26',
            curso: ['Javascript', 'React js'],
            aprobado: true
        },{
            nombre: 'Fernanda Llanos',
            edad: '19',
            curso: ['Java', 'C#', 'Python'],
            aprobado: true
        }
      ]

}