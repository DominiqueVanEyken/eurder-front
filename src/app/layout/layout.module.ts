import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemGalleryComponent } from './item-gallery/item-gallery.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterOutlet} from "@angular/router";



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
