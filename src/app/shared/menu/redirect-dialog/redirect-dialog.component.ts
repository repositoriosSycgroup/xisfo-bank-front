import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-redirect-dialog',
  templateUrl: './redirect-dialog.component.html',
  styleUrls: ['./redirect-dialog.component.sass'],
})
export class RedirectDialogComponent implements OnInit {

  timeInterval: any;

  constructor(
    public dialogRef: DynamicDialogRef
  ) { }

  ngOnInit(): void {
    clearTimeout(this.timeInterval);
    this.timeInterval = setTimeout(() => {
      this.redirect();
    }, 3000);
  }
  close(){
    this.dialogRef.close()
  }
  redirect(){
    const link = document.createElement('a');
    link.target = '_blank';
    link.href = 'https://xisfo.com/login';
    link.setAttribute('visibility', 'hidden');
    link.click();
  }
}

