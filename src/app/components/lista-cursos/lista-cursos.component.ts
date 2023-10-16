import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { MatTableDataSource } from '@angular/material/table';
import { EditarCursoDialogComponent } from '../editar-curso-dialog/editar-curso-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CursoService } from 'src/app/services/curso.service';


@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit{
    cursos!: Curso[];
filtro: string = '';


constructor(
  private cursoService: CursoService,
  
  
){}

ngOnInit(): void {
    this.cursos = this.cursoService.obtenerCursos();
  }
}