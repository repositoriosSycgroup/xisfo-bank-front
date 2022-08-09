import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { LoaderComponent } from './loader/loader.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { RedirectDialogComponent } from './menu/redirect-dialog/redirect-dialog.component';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [PageNotFoundComponent, MenuComponent, RedirectDialogComponent, LoaderComponent],
  imports: [
    CommonModule,
    SidebarModule,
    MenubarModule,
    SlideMenuModule,
    DynamicDialogModule,
    RippleModule,
    ButtonModule
  ],
    exports: [PageNotFoundComponent, MenuComponent, LoaderComponent],
})
export class SharedModule { }
