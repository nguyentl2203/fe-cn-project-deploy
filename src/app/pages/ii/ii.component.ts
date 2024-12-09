import { Collection } from '../../utils/app.collection';
import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiFetchingService } from '../../utils/app.service';
import { CardComponent } from '../../components/card/card.component';
import { ResultComponent } from '../../components/result/result.component';
import { PopupComponent } from '../../components/popup/popup.component';

@Component({
  selector: 'app-ii',
  standalone: true,
  imports: [NgOptimizedImage, CardComponent, ResultComponent, PopupComponent],
  templateUrl: './ii.html',
  styleUrl: './ii.scss',
})
export class IIComponent {
  imgSrcArray: string[] = [];
  videoSrcArray: string[] = [];
  uploadImgSrc: string = '';
  hasGetImageInfo: boolean = false;
  isLoading1: boolean = false;
  isLoading2: boolean = false;
  isCameraLoading: boolean = false;
  fetchingData: Array<any> = [];
  isPopupOpen: boolean = false;
  isCameraOpen: boolean = false;
  imageInfo: any = {};

  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasElement') canvasElement!: ElementRef<HTMLCanvasElement>;

  private mediaStream: MediaStream | null = null;

  constructor(private apiService: ApiFetchingService) {
    const collection = new Collection();
    this.imgSrcArray = collection.imgSrc;
    this.videoSrcArray = collection.videoSrc;
    // this.fetchingData =
    //   collection.fetchingData.result.classification.suggestions;
    // this.imageInfo = collection.fetchingDataDetails;
  }

  async getImageInfo() {
    this.hasGetImageInfo = true;
    this.isLoading1 = true;
    const res = await this.apiService.getImageInfo(this.uploadImgSrc);
    this.fetchingData = res.result.classification.suggestions;
    this.isLoading1 = false;
  }
  async getImageDetailInfo(i: number) {
    this.isLoading2 = true;
    const res = await this.apiService.getDetailInfo(this.fetchingData[i]);
    this.imageInfo = res || null;
    this.isLoading2 = false;
  }
  stopCamera() {
    if (this.mediaStream) {
      const tracks = this.mediaStream.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
      this.videoElement.nativeElement.srcObject = null;
    }
  }
  takePicture() {
    console.log('moimoi');
    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;
    const context = canvas.getContext('2d');
    if (context) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/png');
      this.uploadImgSrc = dataUrl;
    }
    this.isCameraOpen = false;
    this.stopCamera();
  }
  handleStream(stream: MediaStream) {
    this.mediaStream = stream;
    this.videoElement.nativeElement.srcObject = stream;
  }
  handleCamera(camera: { open?: boolean; is_loading?: boolean }) {
    if (camera.is_loading || camera.is_loading === false) {
      this.isCameraLoading = camera.is_loading;
    }
    if (camera.open || camera.open === false) {
      this.isCameraOpen = camera.open;
    }
  }
  handleImgSrc(imgSrc: string) {
    this.uploadImgSrc = imgSrc;
  }
  handlePopup(popup: { open: boolean; index?: number }) {
    this.isPopupOpen = popup.open;
    console.log(popup.index);
    if (popup.index || popup.index === 0) {
      this.getImageDetailInfo(popup.index);
    }
  }
  console(data: any) {
    console.log(data);
  }
}
