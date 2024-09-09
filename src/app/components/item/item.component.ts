import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item
  @Output() emitiEdidarItem = new EventEmitter;
  @Output() emitirDeletarItem = new EventEmitter;

  faPen = faPen
  faTrash = faTrash

  constructor() { }

  ngOnDestroy(): void {
    console.log('Limpeza');
  }

  ngOnInit(): void {
   }

  ngOnChanges(changes: SimpleChanges): void {
  }

  editarItem(){
    this.emitiEdidarItem.emit(this.item);
  }

  deletarItem(){
    this.emitirDeletarItem.emit(this.item.id)
  }
}
