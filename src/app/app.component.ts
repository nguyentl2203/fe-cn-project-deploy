import { ImgSrc } from './app.collection';
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
  fetchingData: any[] = [];
  hasGetImageInfo: boolean = false;
  isLoading: boolean = false;
  constructor(private apiService: ApiFetchingService) {
    const imgSources = new ImgSrc();
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
    this.isLoading = true;
    const res = await this.apiService.getImageInfo(this.uploadImgSrcBase64);
    const imgSources = new ImgSrc();
    this.fetchingData =
      imgSources.fetchingData.result.classification.suggestions;
    this.startTypingEffect(this.fetchingData);
    console.log(typeof this.fetchingData);
    this.isLoading = false;
  }

  startTypingEffect(data: any[]) {
    const text = this.formatImageInfo(data);
    const container = document.querySelector('#response-container')!;
    let i = 0;
    container.innerHTML = '';
    function type() {
      if (i < text.length) {
        if (text.substr(i, 6) === '&nbsp;') {
          container.innerHTML += '&nbsp;';
          i += 6;
        } else {
          if (
            container.innerHTML.charAt(container.innerHTML.length - 1) === '_'
          ) {
            container.innerHTML = container.innerHTML.slice(0, -1);
          }
          container.innerHTML += text.charAt(i) + '_';
          i++;
        }
        setTimeout(type, 35);
      } else {
        container.innerHTML = container.innerHTML.slice(0, -1);
      }
    }
    type();
  }

  formatImageInfo(data: any[]) {
    let spaces = '&nbsp;'.repeat(10);
    return (
      spaces +
      'This picture might be ' +
      data
        .map(
          (item) =>
            `${item.name} with probability of ${item.probability * 100}%`
        )
        .join(' or ') +
      '. ' +
      data
        .map(
          (item) =>
            `${item.name} have some common names like ` +
            item.details.common_names.map((name: any) => `${name}`).join(', ')
        )
        .join(' and ') +
      '.'
    );
  }
}
