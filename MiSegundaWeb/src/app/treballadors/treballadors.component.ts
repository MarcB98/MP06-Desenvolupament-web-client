import { Component, Input, OnInit } from '@angular/core';
import { CompanyWorker } from '../models/trabajador.model';

@Component({
  selector: 'app-treballadors',
  templateUrl: './treballadors.component.html',
  styleUrls: ['./treballadors.component.css']
})
export class TreballadorsComponent implements OnInit {

  @Input() worker: CompanyWorker = null;

  constructor() { }

  ngOnInit(): void {
  }

}
