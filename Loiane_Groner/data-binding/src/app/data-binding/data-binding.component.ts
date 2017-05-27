import { Component, OnInit } from '@angular/core';
import { MeuFormModule } from '../meu-form/meu-form.module'

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 15;

  constructor() { }

  ngOnInit() {
  }

  getValor(): number{
    return 1;
  }

  getCurtirCurso(): boolean{
    return true;
  }

  botaoClicado(): void{
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent): void{
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor): void{
    this.valorSalvo = valor;
  }

  onMouseOverOut(): void{
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento): void{
    console.log(evento.novoValor);
  }

}
