import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Collection } from '../../utils/app.collection';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
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
