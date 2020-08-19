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

}
