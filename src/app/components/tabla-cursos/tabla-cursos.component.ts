import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { MatTableDataSource } from '@angular/material/table';
import { EditarCursoDialogComponent } from '../editar-curso-dialog/editar-curso-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-tabla-cursos',
  templateUrl: './tabla-cursos.component.html',
  styleUrls: ['./tabla-cursos.component.css']
})
export class TablaCursosComponent implements OnInit{
 cursos!: Curso[];
  filtro: string = '';
dataSource!: MatTableDataSource<Curso>;
columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta', 'acciones'];

constructor(
  private cursoService: CursoService,
  private dialog: MatDialog,
){
 
  
}
abrirModal(curso: Curso){
const dialogRef = this.dialog.open(EditarCursoDialogComponent, {
  data: curso
});

  }
  ngOnInit(): void {
    this.cursos = this.cursoService.obtenerCursos();
    this.dataSource = new MatTableDataSource<Curso>(this.cursos);
  }
}
