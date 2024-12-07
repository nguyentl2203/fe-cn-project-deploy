import { Collection } from '../../utils/app.collection';
import { NgOptimizedImage, NgStyle, PercentPipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiFetchingService } from '../../utils/app.service';
import { FirstLetterUppercasePipe } from '../../utils/app.pipe';

@Component({
  selector: 'app-ii',
  standalone: true,
  imports: [NgOptimizedImage, NgStyle, FirstLetterUppercasePipe, PercentPipe],
  templateUrl: './ii.html',
  styleUrl: './ii.scss',
})
export class IIComponent {
  imgSrcArray: string[] = [];
  videoSrcArray: string[] = []
  preImageSrcArray: number[] = [];
  uploadImgSrc: string = '';
  hasGetImageInfo: boolean = false;
  isLoading1: boolean = false;
  isLoading2: boolean = false;
  isCameraLoading: boolean = false
  fetchingData: Array<any> = [];
  isPopupOpen: boolean = false;
  isCameraOpen: boolean = false;
  imageInfo: any = {};
  keys: string[] = [];

  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasElement') canvasElement!: ElementRef<HTMLCanvasElement>;

  private mediaStream: MediaStream | null = null

  constructor(private apiService: ApiFetchingService) {
    const collection = new Collection();
    this.imgSrcArray = collection.imgSrc;
    this.videoSrcArray = collection.videoSrc;
    this.preImageSrcArray = this.imgSrcArray.slice(2, 8).map((_, i) => i + 3);
    // this.fetchingData =
    //   collection.fetchingData.result.classification.suggestions;
    // this.imageInfo = collection.fetchingDataDetails;
  }
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        this.uploadImgSrc = base64String;
      };
      reader.readAsDataURL(file);
    }
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
    this.imageInfo = res;
    this.console(this.imageInfo)
    this.isLoading2 = false;
  }
  objectKeys(obj: any): string[] {
    if (obj === null || typeof obj !== 'object') return [];
    return Object.keys(obj);
  }
  openCamera() {
    this.isCameraLoading = true
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        this.mediaStream = stream
        this.videoElement.nativeElement.srcObject = stream;
        this.isCameraLoading = false
      })
      .catch((err) => {
        console.log('Error accessing the camera: ', err);
        this.isCameraLoading = false
      });
    this.isCameraOpen = true
  }
  stopCamera() {
    if (this.mediaStream) {
      const tracks = this.mediaStream.getTracks()
      tracks.forEach((track) => {
        track.stop()
      })
      this.videoElement.nativeElement.srcObject = null
    }
  }
  takePicture() {
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
    this.isCameraOpen = false
    this.stopCamera()
  }

  console(data: any) {
    console.log(data);
  }
}
