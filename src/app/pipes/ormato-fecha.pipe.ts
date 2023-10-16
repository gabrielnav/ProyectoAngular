import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ormatoFecha'
})
export class OrmatoFechaPipe implements PipeTransform {

  transform(fecha: Date): string {
    let resultado: string;

    resultado = `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()} a las ${fecha.getHours()}:${fecha.getMinutes()}` //dd/MM/YYYY a las HH:mm
    return resultado;
  }

}
