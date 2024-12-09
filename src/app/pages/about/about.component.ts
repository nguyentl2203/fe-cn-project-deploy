import { Component } from "@angular/core";
import { Collection } from "../../utils/app.collection";
import { NgOptimizedImage } from "@angular/common";

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [NgOptimizedImage],
    templateUrl: './about.html',
    styleUrl: './about.scss'
})
export class AboutComponent {
    imgSrcArray: string[] = [];
    constructor() {
      const collection = new Collection();
      this.imgSrcArray = collection.imgSrc;
    }
}