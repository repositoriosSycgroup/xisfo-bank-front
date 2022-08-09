import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EffectCards, SwiperOptions } from 'swiper';
import SwiperCore from 'swiper';

SwiperCore.use([EffectCards])

@Component({
  selector: 'app-testimonial-responsive',
  templateUrl: './testimonial-responsive.component.html',
  styleUrls: ['./testimonial-responsive.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class TestimonialResponsiveComponent implements OnInit {

  configcard: SwiperOptions = {
    effect: 'cards',
    grabCursor: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
