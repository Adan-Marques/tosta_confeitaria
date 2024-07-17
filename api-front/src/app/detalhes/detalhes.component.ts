import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [HomeComponent ,CommonModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit{

  produto!: any;

  constructor(private servico: ProdutoService, private route: ActivatedRoute) {

  }

  // Método de inicialização
  ngOnInit(){
    this.route.paramMap.subscribe(() => {
      this.selecionar_id();
    })
  }


  selecionar_id(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const produto = this.servico.getProdutoById(id)
    console.log(produto)
    console.log("tipo de produto: " + typeof(produto))
    this.produto = produto
    console.log(this.produto)
    console.log("tipo de this.produto: " + typeof(this.produto))
  }

  // TODO (implementação com backend)
  //     // Método de seleção
  // selecionar_id(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   console.log(id);

  //   this.servico.selecionar_id(id).subscribe(
  //     (produto) => {
  //       this.produto = produto; // atribui o produto recebido do serviço à variável local
  //       console.log(this.produto); // confira se o produto está sendo recebido corretamente
  //     },
  //     (error) => {
  //       console.error('Erro ao carregar produto:', error);
  //     }
  //   );
  // }

}
