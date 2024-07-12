import { Component } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { CommonModule } from '@angular/common';

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


}
