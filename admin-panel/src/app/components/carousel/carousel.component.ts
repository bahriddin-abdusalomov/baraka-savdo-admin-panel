import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  images: string[] = [
    '../../../assets/images/carousel/tild3433-3663-4939-a231-633265343164__nestle.svg',
    '../../../assets/images/carousel/tild3238-3265-4765-b865-356533343830__samsung_logo.svg',
    '../../../assets/images/carousel/tild3064-6563-4636-a138-333632396265__logo_nike_1.svg',
    // '../../../assets/images/carousel/tild6538-3635-4232-b934-343439386338__xiaomi_logo.svg',
    '../../../assets/images/carousel/tild6333-3565-4535-b163-363330366632__jbl_logo.svg',
    '../../../assets/images/carousel/boburjon__aka.png',
    // '../../../assets/images/carousel/tild6238-3136-4332-b862-303663363864__tide_logo.svg',
    '../../../assets/images/carousel/tild6163-6565-4663-a564-653862616533__hp_new_logo_2d_1.svg',
    // '../../../assets/images/carousel/tild3966-3438-4432-b430-303531353234__bq_logo.svg',
    '../../../assets/images/carousel/tild3763-3862-4736-b837-623434323737__philips_logo.svg',
    '../../../assets/images/carousel/tild3535-6430-4033-b639-356437343739__bosch-logo.svg',
    '../../../assets/images/carousel/tild3464-3964-4330-a230-303331616563__lenovo_logo_2015.svg',
  ]; // O'zgartiring kerak

  visibleImages: string[] = [];
  currentIndex = 0;
  itemsPerPage = 3;

  constructor() {}

  ngOnInit(): void {
    this.updateVisibleImages();
  }

  next(): void {
    if(this.itemsPerPage == 9){
      this.currentIndex = 3;
    }
    this.currentIndex += this.itemsPerPage;
    this.updateVisibleImages();
  }

  prev(): void {
    if(this.itemsPerPage == 0){
      this.currentIndex = 6;
    }
    this.currentIndex -= this.itemsPerPage;
    this.updateVisibleImages();
  }

  private updateVisibleImages(): void {
    this.visibleImages = this.images.slice(
      this.currentIndex,
      this.currentIndex + this.itemsPerPage
    );
  }
}
