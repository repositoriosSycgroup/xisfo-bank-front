import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { RedirectDialogComponent } from './redirect-dialog/redirect-dialog.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
  providers: [DialogService],
})
export class MenuComponent implements OnInit {
  mobileMenu: boolean = false;

  @Input() style1!: boolean;
  @Input() style2!: boolean;

  constructor(
    public dialogService: DialogService
  ) { }

  ngOnInit(): void { }

  openMenuMovil() {
    this.mobileMenu = !this.mobileMenu;
  }

  openDialog() {
    const ref = this.dialogService.open(RedirectDialogComponent, {
      header: ' ',
      width: '50%',
      footer: ' ',
    });

  }
}
