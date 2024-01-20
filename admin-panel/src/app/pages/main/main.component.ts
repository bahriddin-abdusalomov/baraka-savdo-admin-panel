import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  images: string[] = [
    '../../../assets/images/logo/apple.svg',
    '../../../assets/images/logo/BQ_Logo.svg.svg',
    '../../../assets/images/logo/Logo_NIKE.svg.svg',
  ];
}
