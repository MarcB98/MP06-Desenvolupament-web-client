import { Component, OnInit } from '@angular/core';
import { EventList } from 'src/app/models/lista-eventos.model';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  category: string = 'Mostrar';
  listaEventos: EventList[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
