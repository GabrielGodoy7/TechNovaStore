import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.page.html',
  styleUrls: ['./smartphones.page.scss'],
})
export class SmartphonesPage implements OnInit {
  qtdeItensCarrinho = 0;

  listaProdutos = [
    {nome: "Samsung Galax S23 Ultra 5g",
    descricao: "Samsung Galaxy S23 Ultra 5G - Além da Inovação, Experimente a vanguarda da tecnologia com o Galaxy S23 Ultra 5G. Câmeras avançadas, desempenho insuperável e conectividade 5G para um mundo sem limites. O futuro está em suas mãos.",
    preco:6399,
    foto: "../../assets/img/$_57.png"},

    {nome: "Samsung Galax S22 5G",
    descricao: "Samsung Galaxy S22 - Inovação em Suas Mãos, Desempenho excepcional, câmeras de alta qualidade e design elegante se fundem no Galaxy S22. Tecnologia de ponta para acompanhar seu estilo de vida dinâmico.",
    preco:2698,
    foto: "../../assets/img/S22.png"},

    {nome: "Iphone 14 Pro Max",
    descricao: "iPhone 14 Pro Max - Excelência Repensada, Desempenho máximo, câmeras de elite e design sofisticado se unem no iPhone 14 Pro Max. Uma obra-prima tecnológica para elevar sua experiência cotidiana.",
    preco:9799,
    foto:"../../assets/img/iphone-14-pro-max_7386.png"},

    {nome: "Xiaomi Poco M5",
    descricao: "Xiaomi Poco M5 - Performance Surpreendente, Com o Xiaomi Poco M5, obtenha desempenho excepcional a um preço acessível. Bateria de longa duração, câmeras competentes e recursos essenciais para acompanhar seu ritmo.",
    preco:1050,
    foto: "../../assets/img/poco_m5.png"}
  ];

  constructor(private bdtempservice: BdtempService) { }

  ngOnInit() {
  }

  addProdutoCarrinho(produto: any){
    this.bdtempservice.addProdutoCarrinho(produto); // Use the injected service
    this.buscarDadosCarrinho();
  }

  buscarDadosCarrinho(){
    this.qtdeItensCarrinho = this.bdtempservice.buscar('qtdeItensCarrinho');
  }

}
