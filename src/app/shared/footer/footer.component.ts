import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  windowSize!: number;
  isShow: string = 'show'

  /**
   * @listens [HostListener]
   * This decorator listen when the size of the window change to change the windowSize variable
   * when the variable is 'show' it will keep open the accordion
   */
  @HostListener('window:resize', ['$event'])
    onResize(event:any) {
      this.windowSize = event.target.innerWidth;
      this.windowSize <= 900 ? this.isShow = '' : this.isShow = 'show'
  }

  constructor() { }

  ngOnInit(): void {
    this.windowSize = window.innerWidth;
    this.windowSize <= 900 ? this.isShow = '' : this.isShow = 'show'
  }

}
