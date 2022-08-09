import { Component, OnInit } from '@angular/core';
import { Autoplay, SwiperOptions } from 'swiper';
import SwiperCore, {Pagination} from 'swiper';

SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.sass']
})
export class TestimonialComponent implements OnInit {

  config: SwiperOptions = {
    loop: true,
    pagination: true,
    autoplay:{
      delay: 2500,
      disableOnInteraction: true
    },
  }
  constructor() { }

  ngOnInit(): void {
  }

}
