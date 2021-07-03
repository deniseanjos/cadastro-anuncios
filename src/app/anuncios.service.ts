import { AnuncioModel } from './anuncios/anuncio.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  constructor(
    private http: HttpClient
  ) { }

  listarAnuncios(): Observable<any> {
   return this.http.get("http://localhost:3000/anuncios/");
  }

  cadastrarAnuncio(anuncio: AnuncioModel): Observable<any>{
    return this.http.post("http://localhost:3000/anuncios/", anuncio);
  }

  removerAnuncio(id: any) {
    return this.http.delete("http://localhost:3000/anuncios/".concat(id));
  }

  filtrarCliente(nomeCliente: string): Observable<AnuncioModel[]> {
    return this.http.get<AnuncioModel[]>("http://localhost:3000/anuncios/nomeCliente/".concat(nomeCliente));
  }

  filtrarData(filtroData: string): Observable<AnuncioModel[]> {
    return this.http.get<AnuncioModel[]>("http://localhost:3000/anuncios/datas/".concat(filtroData));
  }

}
