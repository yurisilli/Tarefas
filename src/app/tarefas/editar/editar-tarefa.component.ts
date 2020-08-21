import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarefa, TarefaService } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    // modulo que permite que sejam passados parametros via snapshot
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //+ serve para fazer a conversão do valor para numérico
    let id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  atualizar(): void {
    if (this.formTarefa.valid) {
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas/listar']);
    }
  }

}