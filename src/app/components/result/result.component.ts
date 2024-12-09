import { NgOptimizedImage, PercentPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Collection } from '../../utils/app.collection';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [NgOptimizedImage, PercentPipe],
  templateUrl: './result.html',
  styleUrl: './result.scss',
})
export class ResultComponent {
  imgSrcArray: string[] = [];
  loop1: number[] = [1, 2]
  loop2: number[] = [1, 2, 3];

  @Input() isLoading: boolean = false;
  @Input() hasGetImageInfo: boolean = false;
  @Input() fetchingData: Array<any> = [];
  @Output() popupEvent: EventEmitter<{ open: boolean; index: number }> =
    new EventEmitter<{ open: boolean; index: number }>();
  constructor() {
    const collection = new Collection();
    this.imgSrcArray = collection.imgSrc;
  }
}
