import { Component, Input, OnInit } from '@angular/core';
import { Trabajador } from '../models/trabajador.model';

@Component({
  selector: 'app-treballadors',
  templateUrl: './treballadors.component.html',
  styleUrls: ['./treballadors.component.css']
})
export class TreballadorsComponent implements OnInit {

  @Input() worker: Trabajador = null;

  constructor() { }

  ngOnInit(): void {
  }

}
