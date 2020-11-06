import { Component, Input, OnInit } from '@angular/core';
import { EventList } from 'src/app/models/lista-eventos.model';

@Component({
  selector: 'app-alta-evento',
  templateUrl: './alta-evento.component.html',
  styleUrls: ['./alta-evento.component.css']
})
export class AltaEventoComponent implements OnInit {

  @Input() events: EventList = null;
  constructor() { }

  ngOnInit(): void {
  }

}
