import { Component, OnInit } from '@angular/core';
import { Trabajador} from '../models/trabajador.model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  workers: Trabajador[] = [];
  workerSelected: Trabajador = null;

  constructor() { }

  ngOnInit(): void {
    this.workers.push(new Trabajador('Pepito' , 'Valderrama Martinez', 25, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus orci nec ultrices placerat. Vivamus non volutpat risus. Sed ultricies, nibh non mollis ullamcorper, lectus nibh fringilla nunc, eu ullamcorper dui ipsum sed mauris. ', 'https://picsum.photos/150/150'));
    this.workers.push(new Trabajador('Juaquin', ' Sabina Tralala', 32, 'Curabitur at orci ut mi commodo commodo eget in arcu. Maecenas pulvinar magna nec auctor elementum. Suspendisse eu tincidunt diam.', 'https://picsum.photos/150/150'));
    this.workers.push(new Trabajador('Paquita', ' Benito Camela', 40, 'Proin odio mi, convallis ut ultrices quis, feugiat in mauris. Nullam vitae nunc eget mauris finibus consectetur. In tempus turpis mi, sit amet bibendum ligula malesuada at. Curabitur sed interdum ipsum.', 'https://picsum.photos/150/150'));
    this.workers.push(new Trabajador('Marc', ' Batalla Tàpia', 22, 'Vivamus id laoreet velit, ac iaculis est. Donec semper erat at mauris maximus, eget lacinia nulla lobortis. Curabitur eu erat posuere, venenatis ligula eu, volutpat mi. Sed elit neque, sodales non luctus ut, rhoncus non felis.', 'https://picsum.photos/150/150'));
  }

  selectWorker(worker: Trabajador): void {
    this.workerSelected = worker;
  }

}
