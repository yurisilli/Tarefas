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

    //return this.tarefaService.listasTodas();      
    let tarefas: Tarefa[] = [
      { id: 1, descricao: "Zovo", concluida: false },
      { id: 2, descricao: "Zovinho", concluida: true },
    ]
    return tarefas;
  }

}
