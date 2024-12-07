import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import axios from 'axios';
import { Collection } from './app.collection';

@Injectable({
  providedIn: 'root',
})
export class ApiFetchingService {
  // private readonly url = 'https://be-cn-project.onrender.com/';
  private readonly url = 'http://localhost:10000/'
  constructor() {}
  async getImageInfo(data: any) {
    const payload = {
      images: [data]
    }
    const res = await axios.post(this.url, payload);
    return res.data
    const fakeRes = new Collection();
    return new Promise<any>((resolve) => {
      timer(3000).subscribe(() => {
        const fakeResponse = fakeRes.fetchingData
        resolve(fakeResponse);
      });
    });
  }
  async getDetailInfo(data: any) {
    const payload ={
      suggestion:{
        ...data
      }
    };
    const res = await axios.post(`${this.url}details`, payload);
    return res.data;
    const fakeRes = new Collection();
    return new Promise<any>((resolve) => {
      timer(3000).subscribe(() => {
        const fakeGemini = fakeRes.fetchingDataDetails
        resolve(fakeGemini);
      });
    });
  }

}
