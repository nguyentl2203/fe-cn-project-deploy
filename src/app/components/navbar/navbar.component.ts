import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { Collection } from "../../utils/app.collection";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [NgOptimizedImage, RouterLink],
    templateUrl: './navbar.html',
    styleUrl: './navbar.scss',
  })
  export class NavbarComponent {
      imgSrcArray: string[] = [];
      constructor() {
          const collection = new Collection();
          this.imgSrcArray = collection.imgSrc;
      }
  }
