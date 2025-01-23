import { Component } from '@angular/core';
import { ProdutosComponent } from "../../components/produtos/produtos.component";

@Component({
  selector: 'app-grid-produtos',
  standalone: true,
  imports: [ProdutosComponent],
  templateUrl: './grid-produtos.component.html',
  styleUrl: './grid-produtos.component.scss'
})
export class GridProdutosComponent {

}
