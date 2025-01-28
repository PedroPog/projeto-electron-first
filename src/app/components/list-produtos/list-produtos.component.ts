import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-list-produtos',
  standalone: true,
  imports: [],
  templateUrl: './list-produtos.component.html',
  styleUrl: './list-produtos.component.scss'
})
export class ListProdutosComponent {

  @Input() descricao:string="Hambúrguer de Siri Vegetariano";
  @Input() valor:string="42,00";
  @Input() quantidade:number=0;


  btnMais() {
    this.quantidade++;
  }
  btnMenos(){
    if(this.quantidade>0) this.quantidade--;
  }
}
