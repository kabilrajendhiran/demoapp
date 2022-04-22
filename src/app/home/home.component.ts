import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
  };

  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
