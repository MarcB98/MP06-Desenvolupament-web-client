import { Component, OnInit } from '@angular/core';
import { EventList } from 'src/app/models/lista-eventos.model';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  category: string;
  eventos: EventList = null;
  public container: string;
  listaEventos: EventList[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listaEventos.push(new EventList('Festa Major', 'Almenar', 'info@almenar.cat', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'));
  }

  elegirCategoria(event){
    console.log(event.target.value);
    if(event.target.value == "alta") {
      this.category = "Alta Event";
      this.container = "alta"
    } else if(event.target.value == "modify") {
      this.category = "Modificar Event";
      this.container = "modify"
    } else if (event.target.value == "borrar") {
      this.category = "Eliminar Event";
      this.container = "borrar"
    } else {
      this.category = "";
    }
  }

  altaEvent(event){
    this.listaEventos.push(new EventList(event.nom_event, event.ubicacion, event.email, event.descripcion));
  }

  modifyEvent(event){
    for (let index = 0; index < this.listaEventos.length; index++) {
      console.log(this.listaEventos[index].nom_event);
    }
    console.log(event.nom_event);
  }

  modificarEvent(event){
    if(this.container == "modify"){

      this.eventos = event;

    }
  }

}
