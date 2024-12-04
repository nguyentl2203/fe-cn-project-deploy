import { Collection } from './app.collection';
import { NgOptimizedImage, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ApiFetchingService } from './app.service';

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
  uploadImgSrc: string = '';
  uploadImgSrcBase64: string = '';
  hasGetImageInfo: boolean = false;
  isLoading1: boolean = false;
  isLoading2: boolean = false;
  fetchingData: Array<any> = [];
  isPopupOpen: boolean = false;
  preI: number = -1;
  imageInfo: any = {}
  constructor(private apiService: ApiFetchingService) {
    const imgSources = new Collection();
    this.imgSrcArray = imgSources.imgSrc;
    this.preImageSrcArray = this.imgSrcArray.slice(2, 8).map((_, i) => i + 3);
    this.fetchingData =
      imgSources.fetchingData.result.classification.suggestions;
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
  // async getDetailInfo(index: number) {
  //   this.isLoading = true;
  //   const resGemini = await this.apiService.getDetailInfo(
  //     this.res.message.result.classification.suggestions[index]
  //   );
  //   console.log(resGemini);
  //   this.isLoading = false;
  // }
  async getImageDetailInfo(i: number) {
    if ((this.preI === i)) return;
    this.isLoading2 = true;
    const res = await this.apiService.getDetailInfo(this.fetchingData[i]);
    this.imageInfo = res.message.details
    console.log(this.imageInfo);
    this.preI = i;
    this.isLoading2 = false;
  }
}
