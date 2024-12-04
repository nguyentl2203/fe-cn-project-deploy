import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import axios from 'axios'
import { Collection } from './app.collection';
import { compileNgModule } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ApiFetchingService {
  private readonly url = 'http://localhost:3001/';
  constructor() {}
  async getImageInfo(data: any) {
    const payload = {
      images: [data]
    }
    const res = await axios.post(this.url, payload);
    return res.data
    const fakeRes = new Collection()
    return new Promise<any>((resolve) => {
      timer(3000).subscribe(() => {
        const fakeResponse = {
          success: true,
          message: fakeRes.fetchingData,
        };
        resolve(fakeResponse);
      });
    });
  }
  async getDetailInfo(data: any){
    // const payload ={
    //   suggestion:{
    //     ...data
    //   }
    // };
    // const Gemini=await axios.post(`${this.url}details`, payload);
    // return Gemini.data;
    const fakeRes = new Collection()
    return new Promise<any>((resolve)=>{
        timer(3000).subscribe(()=>{
          const fakeGemini = {
            success:true,
            message: fakeRes.fetchingDataDetails,
          };
          resolve(fakeGemini)
        })
    }
    )
  }
}
