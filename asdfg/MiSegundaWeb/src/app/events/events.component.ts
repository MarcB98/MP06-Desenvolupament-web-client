
import { isDevMode, Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EventGallery } from '../models/event-gallery';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: EventGallery[] = [];
  accion: String;
  public container: string;

  eventModificar: EventGallery = null;

  id: number = null

  constructor() { }

  ngOnInit(): void {

     this.events.push(new EventGallery(Math.round(Math.random()*100),'Rappel', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', 'assets/img-events/event1.jpg', 'Hooker Lake', 'quiim2000@gmail.com'));
     this.events.push(new EventGallery(Math.round(Math.random()*100),'Caminata', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', 'assets/img-events/event2.jpg', 'Hiking trail', 'victor202@gmail.com'));
     this.events.push(new EventGallery(Math.round(Math.random()*100),'Cayak', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', 'assets/img-events/event3.jpg', 'Wild river', 'quimmartinezpique@gmail.com'));
     this.events.push(new EventGallery(Math.round(Math.random()*100),'Escalada', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', 'assets/img-events/event4.jpg', 'Mount Fuji', 'autor12@gmail.com'));
     this.events.push(new EventGallery(Math.round(Math.random()*100),'Excursion Turistica', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', 'assets/img-events/event5.jpg', 'Cascade Lauzon', 'quiim2000@gmail.com'));
  }



  elegirAccion(event) {
    console.log(event.target.value);
    if(event.target.value == "add") {
      this.accion = "AÑADIR EVENTO";
      this.container = "add"
    } else if(event.target.value == "edit") {
      this.accion = "EDITAR EVENTO";
      this.container = "edit"
    } else if (event.target.value == "delete") {
      this.container = "delete"
      this.accion = "ELIMINAR EVENTO";
    } else {
      this.accion = "";
    }
  }

  anadirEvento(ev) {

    this.events.push(new EventGallery(ev.idEv ,ev.tituloEv , ev.descripEv, ev.imgEv, ev.ubicacionEv, ev.emailAutor));

  }

  editarEvento(ev: EventGallery){


    if(this.container == "edit"){

      this.eventModificar = ev;

    }

  }

  editEvento(ev){

    for(var i=0; i<this.events.length; i++){

     console.log(this.events[i].idEv);

        // this.events[i].tituloEv = ev.tituloEv;
        // this.events[i].descripEv = ev.descripEv;
        // this.events[i].imgEv = ev.imgEv;
        // this.events[i].ubicacionEv = ev.ubicacionEv;
        // this.events[i].emailAutor = ev.emailAutor;

    }
    console.log(ev.idEv);


  }


  eliminarEvento(event){
    for(var j = 0; j<this.events.length; j++) {
      if(this.events[j].tituloEv == event){
        this.events.splice( j, 1 );
      }
    }
  }




}
