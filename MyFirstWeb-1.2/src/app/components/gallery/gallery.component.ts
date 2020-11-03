import { Component, OnInit } from '@angular/core';
import { GalleryPhoto } from 'src/app/models/gallery-photo.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  category: string = 'All';
  smallPhotos: GalleryPhoto[] = [];

  constructor() { }

  ngOnInit(): void {
    this.smallPhotos.push(new GalleryPhoto('Small Photo Sample', 'https://picsum.photos/300/200'));
    this.smallPhotos.push(new GalleryPhoto('Small Photo Sample', 'https://picsum.photos/300/200'));
    this.smallPhotos.push({description: 'Small Photo Sample', imageURL: 'https://picsum.photos/300/200'});
    this.smallPhotos.push({description: 'Small Photo Sample', imageURL: 'https://picsum.photos/300/200'});
  }

  changeCategory(category: string): void {
    this.category = category;
  }

}
