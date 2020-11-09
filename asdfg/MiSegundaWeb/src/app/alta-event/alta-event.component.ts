import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventGallery } from '../models/event-gallery';

@Component({
  selector: 'app-alta-event',
  templateUrl: './alta-event.component.html',
  styleUrls: ['./alta-event.component.css']
})
export class AltaEventComponent implements OnInit {

  @Output() events: EventGallery[];
  @Output() emitirDatos = new EventEmitter<EventGallery>();

  accion: string;
  mensajeError: string;

  public compEvent: boolean = true;
  public compDescrip: boolean = true;
  public compUbi: boolean = true;
  public compEmail: boolean = true;
  public compCheck: boolean = true;

  public evento: string;
  public ubicacion: string;
  public email: string;
  public descripcion: string;
  public imagen: string;
  public id: number;

  constructor() { }

  ngOnInit(): void {
  }


  enviarDatosAdd(event, ubi, email, descrip, img, check) {

    this.evento = event;
    this.ubicacion = ubi;
    this.email = email;
    this.descripcion = descrip;
    this.imagen = img;

    this.compEvent = true;
    this.compDescrip = true;
    this.compUbi = true;
    this.compEmail = true;
    this.compCheck = true;

    if(!(event && ubi && email && descrip)){
      this.mensajeError = "Los campos 'Evento', 'Ubicacion', 'Email' y 'Descripcion' deben estar rellenados";
      this.compEvent = false;
    }
    else if(check == false) {
      this.mensajeError = "Debes Aceptar condiciones para añadir el evento"
      this.compCheck = false;
    }
    else if(descrip.length < 2){
      this.mensajeError = "La descripcion debe ser de 2 o mas caracteres!"
      this.compDescrip = false;
    }
    else if(!email.includes('@')){
      this.mensajeError = "Debes añadir el simbolo @ a tu correo electronico!"
      this.compEmail = false;
    }

    if(this.compEvent && this.compCheck && this.compDescrip && this.compEmail){

       this.emitirDatos.emit({idEv: Math.round(Math.random()*100),tituloEv: this.evento, descripEv: this.descripcion, imgEv: this.imagen, ubicacionEv: this.ubicacion, emailAutor: this.email});

    }


  }




}
