import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service'; // Import the service

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.page.html',
  styleUrls: ['./promocoes.page.scss'],
})
export class PromocoesPage implements OnInit {
  qtdeItensCarrinho = 0;



  listaProdutos = [
    {nome: "JBL - Sound Bar",
    descricao: "Experiência sonora incomparável...",
    preco: 1490,
    foto:"../../assets/img/JBLBar SoundBox.png"},

    {nome:"Alexa - Echo Dot Com Relógio",
    descricao:"Tempo, música e muito mais...",
    preco:1233,
    foto: "../../assets/img/echo-dot-com-relogio-4a-geracao-smart-speaker-com-relogio-e-alexa_1_1200.png"},

    {name:"Joystick Xbox Series S",
    descricao:"Controle Ultra leve e Ergonomico",
    preco:380,
    foto:"../../assets/img/Xbox-Series-X-1-TB-8K-HDR-2.png"},
  ];

  constructor(private bdtempService: BdtempService) { } // Inject the service

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
