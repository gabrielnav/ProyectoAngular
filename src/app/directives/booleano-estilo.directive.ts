import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBooleanoEstilo]'
})
export class BooleanoEstiloDirective implements OnInit{
@Input ('appBooleanoEstilo') inscripcionAbierta!: boolean;
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    
   }

  ngOnInit(): void {
    console.log(this.inscripcionAbierta);
    this.renderer.setStyle(this.element.nativeElement, 'padding', '0px 10px opx 10px');
    this.renderer.setStyle(this.element.nativeElement, 'border-radius', '40px');
    this.renderer.setStyle(this.element.nativeElement, 'color', '#ffff');
    this.renderer.setStyle(
      this.element.nativeElement, 
      'background-color', 
      this.inscripcionAbierta ? '#4caf50' : '#f44336'
      );
  }

}
