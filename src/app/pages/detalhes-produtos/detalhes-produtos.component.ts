import { Component, Input } from '@angular/core';
import { PersonalizarProdutoComponent } from '../../components/personalizar-produto/personalizar-produto.component';
import { Personalizacao } from '../../models/produtos.interfaca';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalhes-produtos',
  standalone: true,
  imports: [PersonalizarProdutoComponent, RouterModule],
  templateUrl: './detalhes-produtos.component.html',
  styleUrl: './detalhes-produtos.component.scss',
})
export class DetalhesProdutosComponent {
  @Input() quantidade: number = 1;
  @Input() valor: number = 45.0;
  total: number = this.valor * this.quantidade;

  @Input() kitCombo: boolean = true;
  bebida: boolean = false;
  batata: boolean = false;

  title = 'Escolha o tamanho';
  personalizao: Personalizacao[] = [
    {
      id: '1',
      img: 'assets/icons/burguer.png',
      descricao: 'Hamburguer de Siri Pequeno',
      valor: 0,
    },
    {
      id: '2',
      img: 'assets/icons/burguer.png',
      descricao: 'Hamburguer de Siri Médio',
      valor: 2.00,
    },
    {
      id: '3',
      img: 'assets/icons/burguer.png',
      descricao: 'Hamburguer de Siri Grande',
      valor: 5.00,
    },
  ];

  constructor(
    private router: Router,
    private route:ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      const valor:number = params['valor'];
      const combo:boolean = params['combo'];
      this.valor = valor;
      this.kitCombo = combo;
      this.total = this.valor * this.quantidade;
    });
  }

  onItemSelecionado(item: Personalizacao) {
    console.log('Item selecionado:', item);
    this.total = this.total + item.valor;
    if (this.kitCombo) {
      if (!this.bebida) {
        this.title = 'Escolha a bebida';
        this.personalizao = [
          {
            id: '1',
            img: 'assets/icons/drink.png',
            descricao: 'Bebida Pequeno',
            valor: 0,
          },
          {
            id: '2',
            img: 'assets/icons/drink.png',
            descricao: 'Bebida Médio',
            valor: 2.00,
          },
          {
            id: '3',
            img: 'assets/icons/drink.png',
            descricao: 'Bebida Grande',
            valor: 5.00,
          },
        ];
        this.bebida = !this.bebida;
      } else if (!this.batata) {
        this.title = 'Escolha o acompanhamento';
        this.personalizao = [
          {
            id: '1',
            img: 'assets/icons/french-fries.png',
            descricao: 'Batata frita Pequeno',
            valor: 0,
          },
          {
            id: '2',
            img: 'assets/icons/french-fries.png',
            descricao: 'Batata frita Médio',
            valor: 2.00,
          },
          {
            id: '3',
            img: 'assets/icons/french-fries.png',
            descricao: 'Batata frita Grande',
            valor: 5.00,
          },
          {
            id: '1',
            img: 'assets/icons/nuggets.png',
            descricao: 'Nuggets Pequeno',
            valor: 0,
          },
          {
            id: '2',
            img: 'assets/icons/nuggets.png',
            descricao: 'Nuggets Médio',
            valor: 2.00,
          },
          {
            id: '3',
            img: 'assets/icons/nuggets.png',
            descricao: 'Nuggets Grande',
            valor: 5.00,
          },
        ];
        this.batata = !this.batata;
      } else {
        this.router.navigateByUrl('/itens');
      }
    } else {
      this.router.navigateByUrl('/itens');
    }
  }

  onClickMenos() {
    if (this.quantidade > 1) {
      this.quantidade--;
      this.total = this.valor * this.quantidade;
    }
  }
  onClickMais() {
    if (this.quantidade < 100) {
      this.quantidade++;
      this.total = this.valor * this.quantidade;
    }
  }
}
