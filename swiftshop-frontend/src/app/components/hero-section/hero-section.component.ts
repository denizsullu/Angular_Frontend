import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [SlickCarouselModule, MatSelectCountryModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {



  slides = [
    {
      img: 'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg',
    },
    {
      img: 'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg',
    },
    {
      img: 'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg',
    },
    {
      img: 'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg',
    },
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 30000,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    pauseOnHover: true,
  };

  slickInit() {
    console.log('slick initialized');
  }

  breakpoint() {
    console.log('breakpoint');
  }

  afterChange() {
    console.log('afterChange');
  }

  beforeChange() {
    console.log('beforeChange');
  }
}
