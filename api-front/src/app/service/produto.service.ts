import { Injectable } from '@angular/core';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  public lista:Produto[] = [
    {id: 1, nome: "Bolo de Chocolate", preco: 45.00, descricao: "Bolo de chocolate feito com cacau de alta qualidade e recheio cremoso."},
    {id: 2, nome: "Torta de Limão", preco: 35.00, descricao: "Torta de limão com base crocante e recheio de limão siciliano, coberta com merengue."},
    {id: 3, nome: "Brigadeiro Gourmet", preco: 2.50, descricao: "Brigadeiro gourmet feito com chocolate belga, perfeito para qualquer ocasião."},
    {id: 4, nome: "Cupcake Red Velvet", preco: 7.00, descricao: "Cupcake red velvet com cobertura de cream cheese, um clássico irresistível."},
    {id: 5, nome: "Pão de Mel", preco: 4.00, descricao: "Pão de mel recheado com doce de leite e coberto com chocolate."},
    {id: 6, nome: "Cheesecake de Frutas Vermelhas", preco: 50.00, descricao: "Cheesecake cremoso com calda de frutas vermelhas frescas."},
    {id: 7, nome: "Macaron", preco: 3.00, descricao: "Macarons franceses crocantes por fora e macios por dentro, disponíveis em vários sabores."},
    {id: 8, nome: "Palha Italiana", preco: 5.00, descricao: "Palha italiana feita com biscoito amanteigado e chocolate, uma combinação perfeita."},
    {id: 9, nome: "Coxinha de Frango", preco: 6.00, descricao: "Coxinha de frango com massa crocante e recheio bem temperado."},
    {id: 10, nome: "Quiche de Alho-Poró", preco: 40.00, descricao: "Quiche de alho-poró com massa crocante e recheio cremoso, ideal para lanches."}
  ]

  constructor() { }

  getListProdutos(): Produto[] {
    return this.lista;
  }
}
