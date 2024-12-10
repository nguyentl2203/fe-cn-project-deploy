import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Collection } from '../../utils/app.collection';
import { NotificationService } from '../../utils/app.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NgOptimizedImage, NgClass],
  templateUrl: './notification.html',
  styleUrl: './notification.scss',
})
export class NotificationComponent implements OnInit {
  isTrigger: boolean | null = null;
  isAllowedForNextClick: boolean = true;
  imgSrcArray: string[] = [];
  notificationContent: string = '';
  notificationClass: 'success' | 'normal' | 'error' = 'normal';
  constructor(private notificationService: NotificationService) {
    const collection = new Collection();
    this.imgSrcArray = collection.imgSrc;
  }
  ngOnInit(): void {
    this.notificationService.notification$.subscribe((notifi) => {
      this.trigger(notifi.type, notifi.content)
    })
  }
  trigger(casee: 'success' | 'normal' | 'error', content: string) {
    if (this.isAllowedForNextClick) {
      this.isAllowedForNextClick = false;
      this.notificationContent = content;
      this.notificationClass = casee;
      this.isTrigger = true;
      setTimeout(() => {
        this.isTrigger = false;
        this.isAllowedForNextClick = true;
      }, 10000);
    }
  }
}
