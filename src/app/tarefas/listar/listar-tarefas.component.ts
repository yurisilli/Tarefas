import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];
  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodas();
  }

  listarTodas(): Tarefa[] {
    // let tarefas: Tarefa[] = [
    //   { id: 1, descricao: "Registro 1", concluida: false },
    //   { id: 2, descricao: "Registro 2", concluida: true },
    // ];
    //return tarefas;
    return this.tarefaService.listasTodas();
  }

  deletar($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja deletar a tarefa "' + tarefa.descricao + '"?')) {
      this.tarefaService.deletar(tarefa.id);
      this.tarefas = this.listarTodas();
    }
  }

  atualizarStatus(tarefa: Tarefa) {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.descricao + '"?') === false) {
      tarefa.concluida = false;
      this.tarefas = this.listarTodas();
    } else {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodas();
    }
  }
}
