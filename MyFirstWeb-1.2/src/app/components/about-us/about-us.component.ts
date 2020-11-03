import { Component, OnInit } from '@angular/core';
import { CompanyWorker } from 'src/app/models/worker.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

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
