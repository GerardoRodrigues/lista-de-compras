import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Item } from './interfaces/iItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'app-lista-de-compras';

  itemParaEditar! : Item
  
  listaDeCompras! : Array<Item>

  constructor(private service: ListaDeCompraService) { }

  ngDoCheck(): void {
    this.service.atualizarLocalStorage();
  }

  ngOnInit(): void {
      this.listaDeCompras = this.service.getListaDeCompra();
  }

  editarItem(item: Item){
    this.itemParaEditar = item;
  }

  deletarItem(id: number){
    const index = this.listaDeCompras.findIndex((index) => index.id === id);
    this.listaDeCompras.splice(index, 1);
  }

  limparLista(){
    this.listaDeCompras = [];
  }
}
