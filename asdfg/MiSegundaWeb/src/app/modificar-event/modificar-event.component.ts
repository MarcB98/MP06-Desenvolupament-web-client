import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EventGallery } from '../models/event-gallery';

@Component({
  selector: 'app-modificar-event',
  templateUrl: './modificar-event.component.html',
  styleUrls: ['./modificar-event.component.css']
})
export class ModificarEventComponent implements OnInit {

  accion: string;
  mensajeError: string;

  @Output() events: EventGallery[];
  @Output() emitirDatos = new EventEmitter<EventGallery>();

  //@Input() emitirDatosEdit = new EventEmitter<EventGallery>();
  @Input() eventsIn: EventGallery;


  public evento: string;
  public ubicacion: string;
  public email: string;
  public descripcion: string;
  public imagen: string;

  public compEvent: boolean = true;
  public compDescrip: boolean = true;
  public compUbi: boolean = true;
  public compEmail: boolean = true;
  public compCheck: boolean = true;

  constructor() { }

  ngOnInit(): void {

  }


  enviarDatosEdit(event, ubi, email, descrip, img, check) {

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
