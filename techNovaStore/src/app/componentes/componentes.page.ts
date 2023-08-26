import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.page.html',
  styleUrls: ['./componentes.page.scss'],
})
export class ComponentesPage implements OnInit {
  qtdeItensCarrinho = 0;

  listaProdutos = [
    {nome: "Nvidia RTX 4090",
    descricao: "RTX 4090 da NVIDIA. Potência incomparável, ray tracing de ponta e desempenho além do imaginável.",
    preco:4600,
    foto:"../../assets/img/rtx_4090.png"},

    {nome: "Nvidia RTX 2060",
    descricao:"RTX 4090 da NVIDIA. Potência incomparável, ray tracing de ponta e desempenho além do imaginável.",
    preco:3500,
    foto:"../../assets/img/rtx_2060.png"},

    {nome: "Ryzen 7 5800X",
    descricao:" processador AMD Ryzen 7 5800X. 8 núcleos de pura velocidade, 16 threads de desempenho imbatível.",
    preco:2900,
    foto:"../../assets/img/AMD_RYZEN_R7_5800X.png"},

    {nome: "Pichau B550M",
    descricao: "Placa Mãe Pichau B550M: Compacta e Poderosa. Maximize seu PC. Suporte a processadores avançados, slots versáteis. Potência em tamanho reduzido.",
    preco:800,
    foto: "../../assets/img/Placa_mae_pichau_b550m.png"}
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
