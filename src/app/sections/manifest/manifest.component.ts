import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manifest',
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.sass']
})
export class ManifestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMore(){
    const link = document.createElement('a');
    link.target = '_blank';
    link.href = 'https://xisfo.com/storage/forms_documentation/Xisfo-Manifiesto.pdf';
    link.setAttribute('visibility', 'hidden');
    link.click();
  }

}
