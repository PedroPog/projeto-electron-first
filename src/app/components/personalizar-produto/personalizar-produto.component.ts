import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Personalizacao } from '../../models/produtos.interfaca';

@Component({
  selector: 'app-personalizar-produto',
  standalone: true,
  imports: [],
  templateUrl: './personalizar-produto.component.html',
  styleUrl: './personalizar-produto.component.scss'
})
export class PersonalizarProdutoComponent {

  @Input() title!:String;
  @Input() personalizacao!:Personalizacao[];
  @Output() onClick = new EventEmitter<Personalizacao>();

  selecionarItem(item:Personalizacao){
    this.onClick.emit(item);
  }
}
