import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-gamer',
  templateUrl: './gamer.page.html',
  styleUrls: ['./gamer.page.scss'],
})
export class GamerPage implements OnInit {
  qtdeItensCarrinho = 0;

  listaProdutos = [
    {nome:'Controle de PlayStation 5 DualSense',
    descricao:'Controle Original PlayStation DualSense - Branco',
    preco:380,
    foto:'../../assets/img/controleps5.png'},

    {nome:'Controle Xbox Series X',
    descricao:'Controle Original Xbox Series X - Preto',
    preco:340,
    foto:'../../assets/img/Xbox-Series-X-1-TB-8K-HDR-2.png'},

    {nome:'Teclado ReDragon Daksa Switch Blue',
    descricao:'Teclado Gamer ReDragon Daksa com Switch Huano Blue - Preto/Rainbow',
    preco:380,
    foto:'../../assets/img/redragon-k576r-daska-04.png'}
];

  constructor(private bdtempService: BdtempService) { }

  ngOnInit() {
  }

  addProdutoCarrinho(produto: any){
    this.bdtempService.addProdutoCarrinho(produto); // Use the injected service
    this.buscarDadosCarrinho();
  }

  buscarDadosCarrinho(){
    this.qtdeItensCarrinho = this.bdtempService.buscar('qtdeItensCarrinho');
  }

}
