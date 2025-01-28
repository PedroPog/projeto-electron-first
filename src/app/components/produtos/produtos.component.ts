import { Component, Input } from '@angular/core';
import { Produtos } from '../../models/produtos.interfaca';
import { RouterModule } from '@angular/router';

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
}
