import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';
import axios from 'axios';
import { Collection } from './app.collection';

@Injectable({
  providedIn: 'root',
})
export class ApiFetchingService {
  private readonly url = 'https://be-cn-project.onrender.com/';
  // private readonly url = 'http://localhost:10000/'
  constructor(private notificationService: NotificationService) {}
  async getImageInfo(data: any) {
    const payload = {
      images: [data],
    };
    try {
      const res = await axios.post(this.url, payload);
      this.notificationService.triggerNotification('success', 'Done');
      return res.data;
    } catch (err: any) {
      this.notificationService.triggerNotification('error', err.response.data.message || err.message);
      return
    }
    // const fakeRes = new Collection();
    // return new Promise<any>((resolve) => {
    //   timer(3000).subscribe(() => {
    //     const fakeResponse = fakeRes.fetchingData;
    //     resolve(fakeResponse);
    //   });
    // });
  }
  async getDetailInfo(data: any) {
    const payload = {
      suggestion: {
        ...data,
      },
    };
    const res = await axios.post(`${this.url}details`, payload);
    return res.data;
    const fakeRes = new Collection();
    return new Promise<any>((resolve) => {
      timer(3000).subscribe(() => {
        const fakeGemini = fakeRes.fetchingDataDetails;
        resolve(fakeGemini);
      });
    });
  }
}
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
