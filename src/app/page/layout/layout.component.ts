import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
})
export class LayoutComponent implements OnInit {
  style1: boolean = true;
  style2: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onScroll(e: any) {
    let scrollTop = e.target['scrollingElement'].scrollTop;
    if (scrollTop >= 225) {
      this.style1 = false;
      this.style2 = true;
    } else {
      this.style1 = true;
      this.style2 = false;
    }
  }
}
