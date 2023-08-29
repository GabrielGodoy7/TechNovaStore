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
    {nome: "Nvidia RTX 4090",
    descricao: "RTX 4090 da NVIDIA. Potência incomparável, ray tracing de ponta e desempenho além do imaginável.",
    preco:4600,
    foto:"../../assets/img/rtx_4090.png"},

    {nome: "Nvidia RTX 2060",
    descricao:"RTX 4090 da NVIDIA. Potência incomparável, ray tracing de ponta e desempenho além do imaginável.",
    preco:3500,
    foto:"../../assets/img/rtx_2060.png"},

    {nome: "JBL - Sound Bar",
    descricao: "Experiência sonora incomparável: a JBL Sound Bar eleva seu entretenimento a um novo patamar, oferecendo áudio de alta qualidade e imersivo em um design elegante e compacto. Sinta cada detalhe, desde os sussurros mais suaves até as explosões mais intensas, tudo com a facilidade de conectividade Bluetooth. Sua experiência audiovisual nunca mais será a mesma.",
    preco: 1490,
    foto:"../../assets/img/JBLBar SoundBox.png"},

    {nome: "JBL - Home Theater Cinema 610",
    descricao:"Transforme sua sala em um verdadeiro cinema com o JBL Home Theater Cinema 610. Áudio poderoso e envolvente que eleva sua experiência cinematográfica a outro nível. Sinta o som, mergulhe na emoção.",
    preco: 2275,
    foto:"../../assets/img/CINEMA_610.png"},

    {nome:'Controle de PlayStation 5 DualSense',
    descricao:'Controle Original PlayStation DualSense - Branco',
    preco:380,
    foto:'../../assets/img/controleps5.png'},

    {nome:'Controle Xbox Series X',
    descricao:'Controle Original Xbox Series X - Preto',
    preco:340,
    foto:'../../assets/img/Xbox-Series-X-1-TB-8K-HDR-2.png'},

    {nome: "Samsung Galax S23 Ultra 5g",
    descricao: "Samsung Galaxy S23 Ultra 5G - Além da Inovação, Experimente a vanguarda da tecnologia com o Galaxy S23 Ultra 5G. Câmeras avançadas, desempenho insuperável e conectividade 5G para um mundo sem limites. O futuro está em suas mãos.",
    preco:6399,
    foto: "../../assets/img/$_57.png"},

    {nome: "Samsung Galax S22 5G",
    descricao: "Samsung Galaxy S22 - Inovação em Suas Mãos, Desempenho excepcional, câmeras de alta qualidade e design elegante se fundem no Galaxy S22. Tecnologia de ponta para acompanhar seu estilo de vida dinâmico.",
    preco:2698,
    foto: "../../assets/img/S22.png"},
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
