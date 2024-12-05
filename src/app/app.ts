import { Collection } from './app.collection';
import { NgOptimizedImage, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ApiFetchingService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  imgSrcArray: string[] = [];
  preImageSrcArray: number[] = [];
  uploadImgSrc: string = '';
  uploadImgSrcBase64: string = '';
  hasGetImageInfo: boolean = false;
  isLoading1: boolean = false;
  isLoading2: boolean = false;
  fetchingData: Array<any> = [];
  isPopupOpen: boolean = false;
  preI: number = -1;
  imageInfo: any = {};
  keys: string[] = [];
  constructor(private apiService: ApiFetchingService) {
    const imgSources = new Collection();
    this.imgSrcArray = imgSources.imgSrc;
    this.preImageSrcArray = this.imgSrcArray.slice(2, 8).map((_, i) => i + 3);
  }
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.uploadImgSrc = URL.createObjectURL(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        this.uploadImgSrcBase64 = base64String;
      };
      reader.readAsDataURL(file);
    }
  }

  async getImageInfo() {
    this.hasGetImageInfo = true;
    this.isLoading1 = true;
    const res = await this.apiService.getImageInfo(this.uploadImgSrcBase64);
    this.fetchingData = res.message.result.classification.suggestions;
    this.isLoading1 = false;
  }
  async getImageDetailInfo(i: number) {
    if (this.preI === i) return;
    this.isLoading2 = true;
    const res = await this.apiService.getDetailInfo(this.fetchingData[i]);
    const keys = Object.keys(res.message.data.details);
    const outerkeys = Object.keys(res.message).slice(
      1,
      Object.keys(res.message).length
    );
    this.keys.push(
      ...[
        keys[0],
        outerkeys[1],
        outerkeys[2],
        keys[1],
        outerkeys[0],
        ...keys.slice(2),
        outerkeys[3],
      ]
    );
    console.log(this.keys);
    this.imageInfo = res.message;
    this.preI = i;
    this.isLoading2 = false;
  }
  objectKeys(obj: any): string[] {
    if (obj === null || typeof obj !== 'object') return [];
    console.log(Object.keys(obj), 'object keys');
    return Object.keys(obj);
  }
  isArray(key: any): boolean {
    return Array.isArray(this.imageInfo.data.details[key]);
  }

  isObject(value: any): boolean {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }

  isString(value: any): boolean {
    return typeof value === 'string';
  }
}
