import { Component } from '@angular/core';
import { Collection } from '../../utils/app.collection';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './donate.html',
  styleUrl: './donate.scss',
})
export class DonateComponent {
  imgSrcArray: string[] = [];
  constructor() {
    const collection = new Collection();
    this.imgSrcArray = collection.imgSrc;
  }
}
