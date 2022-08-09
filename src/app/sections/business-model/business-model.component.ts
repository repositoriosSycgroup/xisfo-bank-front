import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-business-model',
  templateUrl: './business-model.component.html',
  styleUrls: ['./business-model.component.sass'],
})
export class BusinessModelComponent implements OnInit {

  number_1:number = 1
  constructor() { }

  ngOnInit(): void {
  }

}
