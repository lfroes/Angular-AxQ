import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

interface ImageItem {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

@Component({
  selector: "app-img-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./img-page.component.html",
  styleUrl: "./img-page.component.scss",
})
export class ImgPageComponent implements OnInit {
  images: ImageItem[] = [];

  localImages = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
  ];

  ngOnInit(): void {
    this.generateImages();
  }

  generateImages(): void {
    for (let i = 0; i < 12; i++) {
      const isLocal = Math.random() > 0.5;
      const width = Math.floor(Math.random() * 200) + 200;
      const height = Math.floor(Math.random() * 200) + 200;

      const image: ImageItem = {
        id: i,
        src: isLocal
          ? this.localImages[
              Math.floor(Math.random() * this.localImages.length)
            ]
          : `https://:picsum.photos/${width}/${height}`,
        alt: `Random Image ${i}`,
        width,
        height,
      };

      this.images.push(image);
    }
  }
}
