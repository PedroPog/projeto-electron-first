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
      valor: '16.00',
      status: true,
      id: 1,
      combo: false
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16.00',
      status: false,
      id: 2,
      combo: false
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16.00',
      status: true,
      id: 3,
      combo: false
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16.00',
      status: false,
      id: 4,
      combo: false
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16.00',
      status: true,
      id: 5,
      combo: false
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16.00',
      status: false,
      id: 6,
      combo: false
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16.00',
      status: true,
      id: 7,
      combo: false
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16.00',
      status: false,
      id: 8,
      combo: false
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16.00',
      status: true,
      id: 9,
      combo: false
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16.00',
      status: false,
      id: 10,
      combo: false
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16.00',
      status: true,
      id: 11,
      combo: false
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16.00',
      status: false,
      id: 12,
      combo: false
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16.00',
      status: true,
      id: 13,
      combo: false
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16.00',
      status: false,
      id: 14,
      combo: false
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16.00',
      status: true,
      id: 15,
      combo: false
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16.00',
      status: false,
      id: 16,
      combo: false
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16.00',
      status: true,
      id: 17,
      combo: false
    },
    {
      description: 'HAMBURGUER DE SIRI',
      imagem: 'assets/icons/burguer.png',
      valor: '16.00',
      status: false,
      id: 18,
      combo: false
    },
  ];
}
