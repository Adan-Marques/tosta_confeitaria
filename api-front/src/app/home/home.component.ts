import { Component } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { CommonModule } from '@angular/common';
import { Item } from '../model/Item';
import { Produto } from '../model/Produto';
  
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private produtoService: ProdutoService) {}

  public lista = this.produtoService.getListProdutos();

  formatarNumero(numero:number) {
    if (typeof numero !== 'number') {
        return ''; // trata valores não numéricos
    }
    // Formata o número para o padrão brasileiro
    return numero.toFixed(2).replace('.', ',');
  }

  public comprar(produto: Produto) {
    let novo: Item = new Item();
    novo.id = produto.id;
    novo.nome = produto.nome;
    novo.preco = produto.preco;

    //TODO: arrumar seleção de quantidade
    novo.quantidade = 1;
    novo.total = (produto.preco) * (novo.quantidade);
    let lista: Item[] = [];
    let json = localStorage.getItem("carrinho");
    if (json == null) {
      lista.push(novo);
      console.log(JSON.stringify(lista));
    } else {
      lista = JSON.parse(json);
      lista.push(novo);
    }
    localStorage.setItem("carrinho", JSON.stringify(lista));
    window.location.href = "./carrinho";
  }

}
