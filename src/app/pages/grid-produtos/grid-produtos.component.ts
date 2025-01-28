import { Component } from '@angular/core';
import { ProdutosComponent } from '../../components/produtos/produtos.component';
import { ListProdutosComponent } from '../../components/list-produtos/list-produtos.component';
import { RouterModule } from '@angular/router';
import { Produtos } from '../../models/produtos.interfaca';

@Component({
  selector: 'app-grid-produtos',
  standalone: true,
  imports: [RouterModule, ProdutosComponent, ListProdutosComponent],
  templateUrl: './grid-produtos.component.html',
  styleUrl: './grid-produtos.component.scss',
})
export class GridProdutosComponent {
  items: number[] = [1, 2, 3, 4, 5];
  pd: Produtos[] = [
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16,00',
      status: true,
      id: 1
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16,00',
      status: false,
      id: 2
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16,00',
      status: true,
      id: 3
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16,00',
      status: false,
      id: 4
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16,00',
      status: true,
      id: 5
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16,00',
      status: false,
      id: 6
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16,00',
      status: true,
      id: 7
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16,00',
      status: false,
      id: 8
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16,00',
      status: true,
      id: 9
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16,00',
      status: false,
      id: 10
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16,00',
      status: true,
      id: 11
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16,00',
      status: false,
      id: 12
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16,00',
      status: true,
      id: 13
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16,00',
      status: false,
      id: 14
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16,00',
      status: true,
      id: 15
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16,00',
      status: false,
      id: 16
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16,00',
      status: true,
      id: 17
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16,00',
      status: false,
      id: 18
    },
  ];
}
