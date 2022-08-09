import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './page/layout/layout.component';
import { FooterComponent } from './shared/footer/footer.component';

// Modulos de prime
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './page/home/home.component';
import { SectionsModule } from './sections/sections.module';

@NgModule({
  declarations: [AppComponent, LayoutComponent, FooterComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SectionsModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    MenubarModule,
    SlideMenuModule,
    CardModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
