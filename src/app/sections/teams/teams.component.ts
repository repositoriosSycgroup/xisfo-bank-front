import {
  Component,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit,
  OnInit,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  style,
  animate,
  AnimationBuilder,
  AnimationPlayer,
} from '@angular/animations';
import { Subscription } from 'rxjs';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.sass'],
})
export class TeamsComponent implements OnInit, AfterViewInit, OnDestroy {
  subscription$!: Subscription;
  element: any;
  @ViewChildren('element') itemsView!: QueryList<ElementRef>;
  @ViewChild('swiper', { static: false }) swiper!: SwiperComponent;
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  teams: any = [
    {
      id: 0,
      img: '../../../assets/img/Team/james_moreno.webp',
      name: 'Desarrollador de Negocios Internacionales',
    },
    {
      id: 2,
      img: '../../../assets/img/Team/carlos_quintero.webp',
      name: 'CEO',
    },
    {
      id: 4,
      img: '../../../assets/img/Team/stefania_castano.webp',
      name: 'Gerente Administrativa',
    },
    {
      id: 6,
      img: '../../../assets/img/Team/don_carlos.webp',
      name: 'Gerente Financiero',
    },
    {
      id: 8,
      img: '../../../assets/img/Team/vanesa_parra.webp',
      name: 'Comunicaciones y Relaciones Públicas',
    },
    {
      id: 10,
      img: '../../../assets/img/Team/danitza_naranjo.webp',
      name: 'Líder Comercial',
    },
    {
      id: 12,
      img: '../../../assets/img/Team/yesica_guzman.webp',
      name: 'Directora de Mercadeo',
    },
    {
      id: 14,
      img: '../../../assets/img/Team/jhon_santos.webp',
      name: 'Líder de T.I',
    },
    {
      id: 16,
      img: '../../../assets/img/Team/aleja_marin.webp',
      name: 'Directora de Recursos Humanos',
    },
  ];

  private player!: AnimationPlayer;

  timer = 450;
  timing = '450ms';
  animates = [0, 2, 4, 6, 8, 10, 12, 14, 16];

  cellWidth!: number;
  radius: number = 360;
  minScale: number = 0.5;

  selectedIndex = 0;

  movements = [
    { pos: 0, right: [1, 2], left: [17, 16] },
    { pos: 2, right: [3, 4], left: [1, 0] },
    { pos: 4, right: [5, 6], left: [3, 2] },
    { pos: 6, right: [7, 8], left: [5, 4] },
    { pos: 8, right: [9, 10], left: [7, 6] },
    { pos: 10, right: [11, 12], left: [9, 8] },
    { pos: 12, right: [13, 14], left: [11, 10] },
    { pos: 14, right: [15, 16], left: [13, 12] },
    { pos: 16, right: [17, 0], left: [15, 14] },
  ];

  constructor(private builder: AnimationBuilder) {}

  ngOnInit(): void {}

  animateViews(direction: string) {
    let element = document.querySelectorAll<Element>('.author_carousel');
    element.forEach((item: any) => (item.style.display = 'none'));

    this.animates.forEach((x: number, index: number) => {
      const mov: any = this.movements.find((m) => m.pos == x);
      const item: any = this.itemsView.find((_x, i) => i == index);

      const animations = mov[direction].map((m: any) => {
        const angle = (m * 2 * Math.PI) / 18;
        const scale =
          (1 + this.minScale) / 2 + ((1 - this.minScale) / 2) * Math.cos(angle);
        const applystyle = {
          left: -this.cellWidth / 2 + this.radius * Math.sin(angle) + 'px',
          transform: 'scale(' + scale + ')',
          filter: angle == 0 ? ' ' : 'saturate(70%)',
          position: 'absolute',
          'z-index': Math.floor(100 * scale),
        };

        if (angle == 0) {
          const result: any = this.movements[index];
          this.element = document.getElementById(result.pos) as HTMLElement;
          this.element.style.display = 'block';
        }

        return animate(
          this.timer / mov[direction].length + 'ms',
          style(applystyle)
        );
      });

      const myAnimation = this.builder.build(animations);
      this.player = myAnimation.create(item.nativeElement);
      this.player.onDone(
        () => (this.animates[index] = mov[direction][mov[direction].length - 1])
      );
      this.player.play();
    });
  }

  prev() {
    this.selectedIndex--;
    this.animateViews('right');
  }

  next() {
    this.selectedIndex++;
    this.animateViews('left');
  }

  ngAfterViewInit() {
    this.cellWidth = this.itemsView.first.nativeElement.offsetWidth;
    this.animateViews('left');
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  slideNext() {
    this.swiper.swiperRef.slideNext(100);
  }
  slidePrev() {
    this.swiper.swiperRef.slidePrev(100);
  }
}
