export interface Produtos{
  id:number;
  description:string;
  valor:string;
  imagem:string;
  status:boolean;
  combo:boolean;
}
export interface Personalizacao{
  id:string;
  img:string;
  descricao:string;
  valor:number;
}
export interface FormasPagamento{
  id:string;
  descricao:string;
  img:string;
}
