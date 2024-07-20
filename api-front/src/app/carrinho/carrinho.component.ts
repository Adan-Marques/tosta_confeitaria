import { Component } from '@angular/core';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {

  public lista: Produto[] = [];
  public mensagem: String = "";
  public totalCarrinho: number = 0;

  constructor(){
    let json = localStorage.getItem("carrinho");
    if(json==null){
      this.mensagem = "Sua cesta de compras esta vazia!";
    } 
    else {
      this.lista = JSON.parse(json);
      for(let item of this.lista){
        this.totalCarrinho = this.totalCarrinho + item.preco;
      }
    }
  }

  // limpar(){
  //   this.lista = [];
  //   localStorage.removeItem("cesta");
  // }

  // redirectToVitrine(){
  //   window.location.href="./vitrine";
  // }

  formatarNumero(numero:number) {
    if (typeof numero !== 'number') {
        return ''; // trata valores não numéricos
    }
    // Formata o número para o padrão brasileiro
    return numero.toFixed(2).replace('.', ',');
  }

}
