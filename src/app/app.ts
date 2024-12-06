import { Collection } from './app.collection';
import { NgOptimizedImage, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ApiFetchingService } from './app.service';
import { FirstLetterUppercasePipe } from './app.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage, NgStyle, FirstLetterUppercasePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  imgSrcArray: string[] = [];
  preImageSrcArray: number[] = [];
  uploadImgSrc: string = ' ';
  uploadImgSrcBase64: string = '';
  hasGetImageInfo: boolean = true;
  isLoading1: boolean = false;
  isLoading2: boolean = false;
  fetchingData: Array<any> = [];
  isPopupOpen: boolean = true;
  imageInfo: any = {};
  keys: string[] = [];
  constructor(private apiService: ApiFetchingService) {
    const imgSources = new Collection();
    this.imgSrcArray = imgSources.imgSrc;
    this.preImageSrcArray = this.imgSrcArray.slice(2, 8).map((_, i) => i + 3);
    this.fetchingData = imgSources.fetchingData.result.classification.suggestions
    this.imageInfo = imgSources.fetchingDataDetails
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
    this.fetchingData = res.result.classification.suggestions;
    this.isLoading1 = false;
  }
  async getImageDetailInfo(i: number) {
    this.isLoading2 = true;
    const res = await this.apiService.getDetailInfo(this.fetchingData[i]);
    this.imageInfo = res;
    this.isLoading2 = false;
  }
  objectKeys(obj: any): string[] {
    if (obj === null || typeof obj !== 'object') return [];
    return Object.keys(obj);
  }
}
