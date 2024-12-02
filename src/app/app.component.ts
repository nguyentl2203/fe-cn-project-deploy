import { ImgSrc } from './app.collection';
import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  imgSrcArray: string[] = []
  constructor() {
    const imgSources = new ImgSrc()
    this.imgSrcArray = imgSources.imgSrc
  }
}
