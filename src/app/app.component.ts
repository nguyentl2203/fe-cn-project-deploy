import { ImgSrc } from './app.collection';
import { NgOptimizedImage, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  imgSrcArray: string[] = [];
  preImageSrcArray: number[] = [];
  uploadImgSrc: string = ''
  constructor() {
    const imgSources = new ImgSrc();
    this.imgSrcArray = imgSources.imgSrc;
    this.preImageSrcArray = this.imgSrcArray
      .slice(2, this.preImageSrcArray.length - 1)
      .map((_, i) => i + 3);
  }
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.uploadImgSrc = URL.createObjectURL(file)
    }
  }
}
