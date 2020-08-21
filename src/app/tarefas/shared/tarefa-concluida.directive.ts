import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {
  // input fornece a informação passada via HTML
  @Input() tarefaConcluida: boolean;

  // "el" referencia do elemento html que sera alterado
  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.tarefaConcluida) {
      this.el.nativeElement.style.textDecoration = 'line-through';
    }
  }

}
