import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-growth',
  templateUrl: './growth.component.html',
  styleUrls: ['./growth.component.sass'],
})
export class GrowthComponent implements OnInit, OnDestroy {
  count: number = 0;
  number: number = 2999;
  number2: number = 0;
  number3: number = 0;
  number4: number = 0;
  subscription$!: Subscription;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {

    let scrollTop = e.target['scrollingElement'].scrollTop;
    let scrollHeight = e.target['scrollingElement'].scrollHeight;
    if (scrollTop >= scrollHeight - 6000) {
      if (this.count <= 0) {
        this.numbersInterval();
        this.count += 1;
      }
    } else {
      this.count = 0;
      this.number = 2999;
      this.number2 = 0;
      this.number3 = 0;
      this.number4 = 0;
      this.subscription$?.unsubscribe();
    }
  }
  numbersInterval() {
    const numbers = interval(10);
    const numbers2 = interval(20);
    const numbers3 = interval(400);
    const numbers4 = interval(400);

    const takeNumbers1 = numbers.pipe(take(201));
    const takeNumbers2 = numbers2.pipe(take(150));
    const takeNumbers3 = numbers3.pipe(take(6));
    const takeNumbers4 = numbers4.pipe(take(6));

    this.subscription$ = takeNumbers1.subscribe((x) => this.number++);
    this.subscription$ = takeNumbers2.subscribe((x) => this.number2++);
    this.subscription$ = takeNumbers3.subscribe((x) => this.number3++);
    this.subscription$ = takeNumbers4.subscribe((x) => this.number4++);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
