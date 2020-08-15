import { Injectable } from '@angular/core';
import { Tarefa } from './';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listasTodas(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    // operador ternário verificando se existe alguma tarefa
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void {
    tarefa.id = new Date().getTime();
    const tarefas: Tarefa[] = this.listasTodas();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listasTodas();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listasTodas();
    tarefas.forEach((obj, index, objs) => {
      if (obj.id === tarefa.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  deletar(id: number) : void {
    let tarefas: Tarefa[] = this.listasTodas();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number){
    const tarefas: Tarefa[] = this.listasTodas();
    tarefas.forEach((obj, index, objs) => {
      if (obj.id === id) {
        // alteração de status por inversão
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
