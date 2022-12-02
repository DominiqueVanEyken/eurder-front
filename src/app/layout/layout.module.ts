import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import { ItemFilterPipe } from './item-gallery/item-filter.pipe';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ItemFilterPipe
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ItemFilterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
