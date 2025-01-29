import { Component, EventEmitter } from '@angular/core';
import { FormasPagamento } from '../../models/produtos.interfaca';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forma-pagamentos',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './forma-pagamentos.component.html',
  styleUrl: './forma-pagamentos.component.scss'
})
export class FormaPagamentosComponent {
  timeLeft: number = 10;
  interval: any;
  timeUp = new EventEmitter<void>();

  pagamento: boolean =true;
  pix: boolean=false;

  formas:FormasPagamento[]=[
    {
      id: '1',
      descricao: 'Pix',
      img: 'assets/icons/pix.png'
    },
    {
      id: '2',
      descricao: 'Debito',
      img: 'assets/icons/atm-card.png'
    },
    {
      id: '3',
      descricao: 'Credito',
      img: 'assets/icons/atm-card.png'
    },
    {
      id: '4',
      descricao: 'Carteira Digital',
      img: 'assets/icons/money-transfer.png'
    },
  ];

  total:number=155.00;

  constructor(
    private router:Router
  ){

  }

  selecionarMetodoPagamento(forma:FormasPagamento){
    this.pagamento = !this.pagamento;
    if(forma.id=='1'){
      this.pix = !this.pix;
      return;
    }
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.timeUp.emit(); // Dispara o evento quando o tempo chega a 0
        this.router.navigateByUrl('/');
      }
    }, 1000);
  }

}
