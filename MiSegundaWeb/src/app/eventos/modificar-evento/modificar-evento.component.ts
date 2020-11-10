import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventList } from 'src/app/models/lista-eventos.model';

@Component({
  selector: 'app-modificar-evento',
  templateUrl: './modificar-evento.component.html',
  styleUrls: ['./modificar-evento.component.css']
})
export class ModificarEventoComponent implements OnInit {

  @Output() events: EventList[];
  @Output() Datos = new EventEmitter<EventList>();

  @Input() eventos: EventList;

  category: string;
  men_error: string;

  public b_nomevent: boolean = true;
  public b_descripcio: boolean = true;
  public b_ubicacion: boolean = true;
  public b_email: boolean = true;
  public b_check: boolean = true;

  public nom_event: string;
  public ubicacion: string;
  public email: string;
  public descripcion: string;

  constructor() { }

  ngOnInit(): void {
  }

  enviarDatos(event, ubi, email, desc, check){
    this.nom_event = event;
    this.ubicacion = ubi;
    this.email = email;
    this.descripcion = desc;

    this.b_nomevent = true;
    this.b_ubicacion = true;
    this.b_email = true;
    this.b_descripcio = true;
    this.b_check = true;

    if (!(event && ubi && email && desc)) {
      this.men_error = "NO puede haber ningun campo vacio, Comprueba que esten todos llenos.";
      this.b_nomevent = false;
    }
    else if (check == false) {
      this.men_error = "¡ACEPTA LOS TERMINOS!";
      this.b_check = false;
    }
    else if (desc.length < 2) {
      this.men_error = "¡La descripción debe ser de 2 o mas caracteeres!"
      this.b_descripcio = false;
    }
    else if (!email.includes('@')) {
      this.men_error = "Debes añadir el @ a tu correo electronico"
      this.b_email = false;
    }

    if (this.b_nomevent && this.b_email && this.b_ubicacion && this.b_check) {
      this.Datos.emit({ id_ev: Math.round(Math.random()*100), nom_event: this.nom_event, ubicacion: this.ubicacion, email: this.email, descripcion: this.descripcion});
    }

  }

}
