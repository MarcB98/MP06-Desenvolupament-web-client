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
    this.listaEventos.push(new EventList(Math.round(Math.random()*100), 'Festa Major', 'Almenar', 'info@almenar.cat', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'));
    this.listaEventos.push(new EventList(Math.round(Math.random()*100), 'Festa Major', 'Alfarrás', 'info@alfarras.cat', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'));
    this.listaEventos.push(new EventList(Math.round(Math.random()*100), 'Festa Major', 'Alguaire', 'info@alguaire.cat', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'));
    this.listaEventos.push(new EventList(Math.round(Math.random()*100), 'Festa Major', 'Torrefarrera', 'info@torrefarrera.cat', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'));
  }

  elegirCategoria(event){
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
    this.listaEventos.push(new EventList(event.id_ev, event.nom_event, event.ubicacion, event.email, event.descripcion));
  }

  modifyEvent(event){
    for (let index = 0; index < this.listaEventos.length; index++) {
      if (this.listaEventos[index].id_ev == event.id_ev) {
        this.listaEventos[index].nom_event == event.nom_event;
        this.listaEventos[index].ubicacion == event.ubicacion;
        this.listaEventos[index].email == event.email;
        this.listaEventos[index].descripcion == event.descripcion;
      }
    }
  }

  modificarEvent(event: EventList){
    if(this.container == "modify"){
      this.eventos = event;
    }
  }

  eliminarEvento(ev){
    console.log(ev);

    for (let index = 0; index < this.listaEventos.length; index++) {
      if (this.listaEventos[index].nom_event == ev) {
        this.listaEventos.splice(index, 1);
      }
    }
  }

}
