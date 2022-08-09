import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  loading: boolean = false;
  timeLoading: any;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:load', ['$event'])
  onLoad(event: Event) {
    clearTimeout(this.timeLoading)
    this.timeLoading = setTimeout(()=>{
      this.loading = true;
    }, 2500)
  }

}
