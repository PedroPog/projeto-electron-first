import { Component, Input } from '@angular/core';
import { Produtos } from '../../models/produtos.interfaca';
import { Router, RouterModule } from '@angular/router';
import { DetalhesProdutosComponent } from '../../pages/detalhes-produtos/detalhes-produtos.component';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {

  @Input() produtos!:Produtos[];

  constructor(
    private router:Router,
  ){

  }


  selecionarProdutoDetalhes(produto: Produtos) {
    console.table(produto);
    this.router.navigate(['/detalhes-item', produto.id], {
      queryParams: {
        valor: produto.valor,  // Valor que deseja passar
        combo: produto.combo  // verificar se é combo ou nao
      }
    });
  }
}
