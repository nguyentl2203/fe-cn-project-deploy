import { NgOptimizedImage, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Collection } from '../../utils/app.collection';
import { NotificationService } from '../../utils/app.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgOptimizedImage, NgStyle],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class CardComponent {
  imgSrcArray: string[] = [];
  preImageSrcArray: number[] = [];

  @Input() uploadImgSrc: string = '';
  @Input() hasGetImageInfo: boolean = false;
  @Output() streamEvent: EventEmitter<MediaStream> =
    new EventEmitter<MediaStream>();
  @Output() cameraEvent: EventEmitter<{
    open?: boolean;
    is_loading?: boolean;
  }> = new EventEmitter<{ open?: boolean; is_loading?: boolean }>();
  @Output() imgSrcEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor(private notificationService: NotificationService) {
    const collection = new Collection();
    this.imgSrcArray = collection.imgSrc;
    this.preImageSrcArray = this.imgSrcArray.slice(2, 8).map((_, i) => i + 3);
  }
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        this.uploadImgSrc = base64String;
        this.imgSrcEvent.emit(base64String);
      };
      reader.readAsDataURL(file);
    }
  }
  openCamera() {
    this.cameraEvent.emit({ is_loading: true });
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        this.streamEvent.emit(stream);
        this.cameraEvent.emit({ is_loading: false });
      })
      .catch((err) => {
        this.notificationService.triggerNotification('error', err)
        this.cameraEvent.emit({ is_loading: false });
      });
    this.cameraEvent.emit({ open: true });
  }
}
