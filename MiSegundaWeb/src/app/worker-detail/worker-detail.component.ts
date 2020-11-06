import { Component, Input, OnInit } from '@angular/core';
import { CompanyWorker } from '../models/worker.model';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.css']
})
export class WorkerDetailComponent implements OnInit {

  @Input() worker: CompanyWorker = null;

  constructor() { }

  ngOnInit(): void {
  }

}
