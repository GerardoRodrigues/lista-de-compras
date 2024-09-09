import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges{
  @Input() itemParaEditar! : Item;
  
  valorItem!: string

  editando = false;
  textoBtn = 'Salvar Item'

  constructor(private service: ListaDeCompraService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
      if(!changes['itemParaEditar'].firstChange){
        this.editando = true
        this.textoBtn = 'Editar Item'
        this.valorItem = this.itemParaEditar?.nome;
      }
  }

  adicionarItem(){
    this.service.adicionarItem(this.valorItem);
    this.limparCampo();
  }

  editarItem(){
    this.service.editarItem(this.itemParaEditar, this.valorItem);
    this.limparCampo();
    this.editando = false;
    this.textoBtn = 'Salvar Item';
  }

  limparCampo(){
    this.valorItem = '';
  }
}
