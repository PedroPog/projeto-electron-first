import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GridProdutosComponent } from './pages/grid-produtos/grid-produtos.component';
import { DetalhesProdutosComponent } from './pages/detalhes-produtos/detalhes-produtos.component';
import { FormaPagamentosComponent } from './pages/forma-pagamentos/forma-pagamentos.component';
import { TesteComponent } from './testes/components/teste/teste.component';

export const routes: Routes = [

  {path:'',component:TesteComponent},
  {path:'Home',component:HomeComponent},
  {
    path:'itens',
    component:GridProdutosComponent
  },
  {
    path:'detalhes-item',
    component:DetalhesProdutosComponent
  },
  {
    path:'forma-pagamento',
    component:FormaPagamentosComponent
  },

];
