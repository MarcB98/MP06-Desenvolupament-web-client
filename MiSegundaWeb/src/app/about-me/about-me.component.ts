import { Component, OnInit } from '@angular/core';
import { CompanyWorker } from '../models/worker.model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  workers: CompanyWorker[] = [];
  workerSelected: CompanyWorker = null;

  constructor() { }

  ngOnInit(): void {
    this.workers.push(new CompanyWorker('Pedro', 'https://picsum.photos/150/150'));
    this.workers.push(new CompanyWorker('Juan', 'https://picsum.photos/150/150'));
    this.workers.push(new CompanyWorker('Jorge', 'https://picsum.photos/150/150'));
    this.workers.push(new CompanyWorker('Borja', 'https://picsum.photos/150/150'));
  }

  selectWorker(worker: CompanyWorker): void {
    this.workerSelected = worker;
  }

}
