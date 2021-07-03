import { AnunciosService } from './../anuncios.service';
import { Component, OnInit } from '@angular/core';
import { AnuncioModel } from './anuncio.model';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {

  anuncio: AnuncioModel = new AnuncioModel();
  anuncios: Array<any> = new Array();
  nomeCliente: string
  dataFiltro: string
  listaAnuncio: AnuncioModel[];

  quantidadeDias: number

  constructor(
    private anunciosService: AnunciosService
  ) { }

  ngOnInit(): void {
    this.listarAnuncios();
  }

  listarAnuncios() {
    this.anunciosService.listarAnuncios().subscribe(anuncios => {
      this.anuncios = anuncios;
    }, err => {
      console.log('Erro ao listar os anuncios', err);
    })
  }

  cadastrar() {
    console.log(this.anuncio);
    this.anuncio.relatorioFinal = this.gerarRelatorio();
    this.anunciosService.cadastrarAnuncio(this.anuncio).subscribe(anuncio => {
      this.anuncio = new AnuncioModel();
      this.listarAnuncios();
    }, err => {
      console.log('Erro ao cadastrar novo anuncio', err);
    })
  }

  removerAnuncio(id) {
    this.anunciosService.removerAnuncio(id).subscribe(anuncio => {
      this.anuncio = new AnuncioModel();
      this.listarAnuncios();
    }, err => {
      console.log('Erro ao deletar o anuncio', err);
    })
  }

  filtrarCliente(){
    if(this.nomeCliente == '') {
      this.listarAnuncios();
    } else {
      this.anunciosService.filtrarCliente(this.nomeCliente).subscribe((resp: AnuncioModel[]) => {
        this.listaAnuncio = resp;
      })
    }
  }

  filtrarData(){
    if(this.dataFiltro == ''){
      this.listarAnuncios();
    } else {
      this.anunciosService.filtrarData(this.dataFiltro).subscribe((resp: AnuncioModel[]) => {
        this.listaAnuncio = resp;
      })
    }
  }

  gerarRelatorio() {
    var diferencaDias = Math.floor((Date.parse(this.anuncio.dataFinal) - Date.parse(this.anuncio.dataInicio)) / 86400000);
    var valorTotalInvestido = diferencaDias * this.anuncio.investimentoDiario;
    var visualizamOriginal = valorTotalInvestido * 30;
    var visualizacaoTotal = visualizamOriginal;

    for(let i = 0; i < 4; i++){
      var cliques = (visualizacaoTotal / 100) * 12;
      var compartilhamentos = (cliques / 20 ) * 3;
      visualizacaoTotal += compartilhamentos * 40;
    }

    var relatorio =  "O valor total investido é de R$ " + Math.round(valorTotalInvestido) + ", sendo as quantidades máximas: " + Math.round(visualizacaoTotal) + " de visualizações, " + Math.round(cliques) + " cliques e " + Math.round(compartilhamentos) + " compartilhamentos.";

    return JSON.stringify(relatorio);

  }

}
