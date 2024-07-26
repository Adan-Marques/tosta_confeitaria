import { Component } from '@angular/core';
import { Item } from '../model/Item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent{

  public lista: Item[] = [];
  public mensagem: String = "";
  public totalCarrinho: number = 0;


  constructor(){
    let json = localStorage.getItem("carrinho");
    if(json == null){
      this.mensagem = "Sua cesta de compras esta vazia!";
    } 
    else {
      this.lista = JSON.parse(json);
      for(let item of this.lista){
        this.totalCarrinho = this.totalCarrinho + item.preco;
      }
    }
  }

  limpar(){
    this.lista = [];
    localStorage.removeItem("carrinho");
  }

  redirectToHome(){
    window.location.href="./home";
  }

  formatarNumero(numero:number) {
    if (typeof numero !== 'number') {
        return ''; // trata valores não numéricos
    }
    // Formata o número para o padrão brasileiro
    return numero.toFixed(2).replace('.', ',');
  }

}
