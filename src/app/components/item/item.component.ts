import {Component, EventEmitter, Input, Output} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import {Item} from "../../interfaces/iItem";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item!: Item
  @Output() emmiterItemToEdit = new EventEmitter<Item>()
  @Output() emmiterItemToDelete = new EventEmitter<number | string>()

  faPen = faPen;
  faTrash = faTrash

  emmiterEditItem() {
    this.emmiterItemToEdit.emit(this.item)
  }

  checkItem(item: Item) {
    item.comprado = !item.comprado
  }

  emmiterDeleteItem() {
    this.emmiterItemToDelete.emit(this.item.id)
  }
}
