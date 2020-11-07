import { Component, OnInit } from '@angular/core';
import { EventList } from 'src/app/models/lista-eventos.model';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  category: string = 'Mostrar';
  eventos: EventList = null;
  listaEventos: EventList[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listaEventos.push(new EventList('Festa Major', 'Almenar', 'info@almenar.cat', 'asdfjkavdvlnñkfjasndlñfvasndjfvanjsdfnsldñvkfnalñsdkfjnvlasdkfnasdkfjasdfnaslñdfajsnñldkfnjvasklñdfñlasdjfnlañvsdfnaslñkdjfnvlañsdfnaldksvjnasdkfjv'));
  }

  cambiarCategoria(category: string): void{
    this.category = category
  }

}
