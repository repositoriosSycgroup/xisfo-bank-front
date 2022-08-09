import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Autoplay, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {Pagination} from 'swiper';

SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-for-you',
  templateUrl: './for-you.component.html',
  styleUrls: ['./for-you.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ForYouComponent implements OnInit {

  @ViewChild('swiper') swiper!: SwiperComponent;

  config: SwiperOptions = {
    loop : true,
    autoplay:{
      delay: 2500,
      disableOnInteraction: true
    },
    pagination: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
