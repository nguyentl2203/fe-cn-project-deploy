import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import axios from 'axios'

@Injectable({
  providedIn: 'root',
})
export class ApiFetchingService {
  private readonly url = 'http://localhost:3001/';
  GIIIsLoading: boolean = false;
  constructor() {}
  async getImageInfo(data: any) {
    this.GIIIsLoading = true;
    const payload = {
      images: [data]
    }
    const res = await axios.post(this.url, payload);
    this.GIIIsLoading = false;
    return res
  }
}
