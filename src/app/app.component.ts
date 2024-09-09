import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Item } from './interfaces/iItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app-lista-de-compras';

  itemParaEditar! : Item
  
  listaDeCompras! : Array<Item>

  constructor(private service: ListaDeCompraService) { }

  ngOnInit(): void {
      this.listaDeCompras = this.service.getListaDeCompra();
  }

  editarItem(item: Item){
    this.itemParaEditar = item;
  }
}
