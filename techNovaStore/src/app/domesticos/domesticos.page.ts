import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-domesticos',
  templateUrl: './domesticos.page.html',
  styleUrls: ['./domesticos.page.scss'],
})
export class DomesticosPage implements OnInit {
  qtdeItensCarrinho = 0;

  listaProdutos = [
    {nome: "JBL - Sound Bar",
    descricao: "Experiência sonora incomparável: a JBL Sound Bar eleva seu entretenimento a um novo patamar, oferecendo áudio de alta qualidade e imersivo em um design elegante e compacto. Sinta cada detalhe, desde os sussurros mais suaves até as explosões mais intensas, tudo com a facilidade de conectividade Bluetooth. Sua experiência audiovisual nunca mais será a mesma.",
    preco: 1490,
    foto:"../../assets/img/JBLBar SoundBox.png"},

    {nome: "JBL - Home Theater Cinema 610",
    descricao:"Transforme sua sala em um verdadeiro cinema com o JBL Home Theater Cinema 610. Áudio poderoso e envolvente que eleva sua experiência cinematográfica a outro nível. Sinta o som, mergulhe na emoção.",
    preco: 2275,
    foto:"../../assets/img/CINEMA_610.png"},

    {nome: "TV 50 Polegadas - TLC",
    descricao: "Descubra cada detalhe com a TV TLC de 50 polegadas. Cores vibrantes e imagem nítida que dão vida às suas emoções. Entretenimento em grande estilo, na sua sala.",
    preco: 3376,
    foto:"../../assets/img/tv.png"},

    {nome:"Alexa - Echo Dot Com Relógio",
    descricao:"Tempo, música e muito mais - Descubra o Echo Dot com Relógio e Alexa. O parceiro perfeito para simplificar seu dia, mantendo você atualizado e no ritmo da sua vida.",
    preco:1233,
    foto:"../../assets/img/echo-dot-com-relogio-4a-geracao-smart-speaker-com-relogio-e-alexa_1_1200.png"},
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
