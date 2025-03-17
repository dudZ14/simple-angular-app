import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-details',
  imports: [],
  templateUrl: './message-details.component.html',
  styleUrl: './message-details.component.css'
})
export class MessageDetailsComponent {

  @Input() // porque vou receber este valor como parametro vindo do componente pai
  message: any = {};

  @Input()
  index: number = -1;

  @Output() // porque vou enviar um evento para o componente pai
  delete: EventEmitter<number> = new EventEmitter<number>();

  onDelete(){
    this.delete.emit(this.index);
  }

}
