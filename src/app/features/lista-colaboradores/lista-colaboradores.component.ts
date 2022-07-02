import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-lista-colaboradores',
  templateUrl: './lista-colaboradores.component.html',
  styleUrls: ['./lista-colaboradores.component.scss']
})
export class ListaColaboradoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  titulo = "Colaborador";
  nomedoBotao = "Ocultar Lista";

  exibeColaborador = true;

  colaboradores: Array<Employee> = [
    {
    id: 7,
    nome: 'Nathan Carlos Exercicio',
    salario: 4500,
    cargo: 'Dev Pl',
    imagem: "https://avatars.githubusercontent.com/u/32680502?v=4"
  },
  {    
    id: 7,
    nome: 'Nathan Carlos Exercicio',
    salario: 4500,
    cargo: 'Dev Pl',
    imagem: "https://avatars.githubusercontent.com/u/32680502?v=4"
  },
  {    
    id: 7,
    nome: 'Nathan Carlos Exercicio',
    salario: 4500,
    cargo: 'Dev Pl',
    imagem: "https://avatars.githubusercontent.com/u/32680502?v=4"
  },
  {    
    id: 7,
    nome: 'Nathan Carlos Exercicio',
    salario: 4500,
    cargo: 'Dev Pl',
    imagem: "https://avatars.githubusercontent.com/u/32680502?v=4"
  }
  ]
  exibeColaboradoresSimNao() {
    this.exibeColaborador = !this.exibeColaborador;
    if (this.exibeColaborador === true){
      this.nomedoBotao = "Ocultar Lista";
    } else {
      this.nomedoBotao = "Exibir Lista";
    }
}

}
