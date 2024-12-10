import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Collection } from '../../utils/app.collection';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './popup.html',
  styleUrl: './popup.scss',
})
export class PopupComponent {
  imgSrcArray: string[] = [];

  @Input() isLoading: boolean = false;
  @Input() isPopupOpen: boolean = false;
  @Input() imageInfo: any = {};
  @Output() popupEvent: EventEmitter<{ open: boolean }> = new EventEmitter<{
    open: boolean;
  }>();
  constructor() {
    const collection = new Collection();
    this.imgSrcArray = collection.imgSrc;
  }
  objectKeys(obj: any): string[] {
    if (obj === null || typeof obj !== 'object') return [];
    return Object.keys(obj);
  }
}
