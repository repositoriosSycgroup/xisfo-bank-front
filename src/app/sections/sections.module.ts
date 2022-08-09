import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessModelComponent } from './business-model/business-model.component';
import { SegmentsComponent } from './segments/segments.component';
import { TestimonialComponent } from './testimonialGlobal/testimonial/testimonial.component';
import { TestimonialResponsiveComponent } from './testimonialGlobal/testimonial-responsive/testimonial-responsive.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { FintechComponent } from './fintech/fintech.component';
import { BankaComponent } from './banka/banka.component';
import { ResumeComponent } from './resume/resume.component';
import { CashBackComponent } from './cash-back/cash-back.component';
import { AppXisfoComponent } from './app-xisfo/app-xisfo.component';
import { ManifestComponent } from './manifest/manifest.component';
import { SloganComponent } from './slogan/slogan.component';

import { NichoComponent } from './nicho/nicho.component';
import { ForYouComponent } from './for-you/for-you.component';
import { EntrepreneurComponent } from './entrepreneur/entrepreneur.component';
import { GrowthComponent } from './growth/growth.component';
import { WefitComponent } from './wefit/wefit.component';
import { TeamsComponent } from './teams/teams.component';
import { SharedModule } from "../shared/shared.module";
import { ImageModule } from "primeng/image";
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    BusinessModelComponent,
    ContactUsComponent,
    SegmentsComponent,
    TestimonialComponent,
    TestimonialResponsiveComponent,
    FintechComponent,
    BankaComponent,
    ResumeComponent,
    CashBackComponent,
    AppXisfoComponent,
    ManifestComponent,
    TeamsComponent,
    SloganComponent,
    NichoComponent,
    ForYouComponent,
    EntrepreneurComponent,
    GrowthComponent,
    WefitComponent,
  ],
  exports: [
    BusinessModelComponent,
    ContactUsComponent,
    SegmentsComponent,
    TestimonialComponent,
    TestimonialResponsiveComponent,
    FintechComponent,
    BankaComponent,
    ResumeComponent,
    CashBackComponent,
    AppXisfoComponent,
    ManifestComponent,
    TeamsComponent,
    SloganComponent,
    NichoComponent,
    ForYouComponent,
    WefitComponent,
    GrowthComponent,
    EntrepreneurComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SwiperModule,
    SharedModule,
    ImageModule,
    ToastModule,
    ProgressSpinnerModule,
    ButtonModule,
    RippleModule
  ],
})
export class SectionsModule { }
