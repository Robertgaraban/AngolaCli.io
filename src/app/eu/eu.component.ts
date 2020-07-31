import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css'],

})
export class EuComponent implements OnInit {

  url: string = 'https://consulting-rg.com/';

  urlimagem: string = 'https://picsum.photos/400';

  urlimagem1: string = 'https://picsum.photos/400';

  nome_curso: string = "Nosso Curso de Angola CLI - Exercicio 01";

  campo_texto: string = " "

  valor_salvo: string = " "

  taskLisk: string = " "

  
  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(valor) {
    this.campo_texto = valor;
}

  salvarValor(valor){
    this.valor_salvo = valor;
    
  }

}
