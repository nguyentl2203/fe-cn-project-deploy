import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Collection } from '../../utils/app.collection';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  imgSrcArray: string[] = [];
  constructor() {
    const collection = new Collection();
    this.imgSrcArray = collection.imgSrc;
  }
}
