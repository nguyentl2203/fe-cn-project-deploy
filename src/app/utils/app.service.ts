import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';
import axios from 'axios';
import { Collection } from './app.collection';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class ApiFetchingService {
   private readonly url = 'https://be-cn-project.onrender.com/';
 // private readonly url = 'http://localhost:10000/';
  private readonly secret = 'NaMCaIDiEuSiEuToTeaM';
  constructor(private notificationService: NotificationService) {}
  private generateSignature(url: string, timestamp: string): string {
    const payload = `${url}:${timestamp}`;
    return CryptoJS.HmacSHA256(payload, this.secret).toString(CryptoJS.enc.Hex);
  }
  async getImageInfo(data: any) {
    const payload = {
      images: [data],
    };
    const timestamp = Date.now().toString();
    const signature = this.generateSignature('/', timestamp);
    try {
      const res = await axios.post(this.url, payload, {
        headers: {
          'X-Signature': signature,
          'X-Timestamp': timestamp,
        },
      });
      this.notificationService.triggerNotification('success', 'Done');
      return res.data;
    } catch (err: any) {
      this.notificationService.triggerNotification(
        'error',
        err.response.data.message || err.message
      );
      return;
    }
  }
  async getDetailInfo(data: any) {
    const payload = {
      suggestion: {
        ...data,
      },
    };
    const timestamp = Date.now().toString();
    const signature = this.generateSignature('/details', timestamp);
    const res = await axios.post(`${this.url}details`, payload, {
      headers: {
        'X-Signature': signature,
        'X-Timestamp': timestamp,
      },
    });
    return res.data;
  }
}
//
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private triggerNotificationSubject = new Subject<{
    type: 'success' | 'normal' | 'error';
    content: string;
  }>();
  notification$ = this.triggerNotificationSubject.asObservable();
  constructor() {}
  triggerNotification(type: 'success' | 'normal' | 'error', content: string) {
    this.triggerNotificationSubject.next({ type, content });
  }
}
