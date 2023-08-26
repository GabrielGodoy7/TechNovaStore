import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdtempService {

  private bd: any = [];

  constructor() { }

  salvar(chave: string, preco: any) {
    if (chave.trim()) {
      this.bd[chave] = preco;
      return true;
    }
    return false;
  }

  buscar(chave: string) {
    if (chave.trim()) {
      return this.bd[chave];
    }
    return null;
  }

  deletar(chave: string) {
    if (chave.trim()) {
      delete this.bd[chave];
      return true;
    }
    return null;
  }

  addProdutoCarrinho(produto: any) {
    if (!this.bd['carrinho']) {
      this.bd['carrinho'] = [];
    }
    if (produto) {
      this.bd['carrinho'].push(produto);
    }
    this.totalCarrinho();
  }

  removeProdutoCarrinho(posicao: number) {
    this.bd['carrinho'].splice(posicao, 1);
    this.totalCarrinho();
  }

  limparCarrinho() {
    this.bd['carrinho'] = [];
    this.totalCarrinho();
  }

  totalCarrinho() {
    let total = 0;

    if (this.bd["carrinho"].length > 0) {
      for (let prod of this.bd['carrinho']) {
        total = total + prod.preco;
      }
    }
    this.salvar('qtdeItensCarrinho', this.bd['carrinho'].length);
    this.salvar('totalCarrinho', total);
    //console.log(this.bd)
  }
}
