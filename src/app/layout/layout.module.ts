import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import { ItemFilterPipe } from './item-gallery/item-filter.pipe';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ItemFilterPipe,
        LoginComponent
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
