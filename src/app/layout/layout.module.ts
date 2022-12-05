import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {ItemFilterPipe} from './item-gallery/item-filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from './login/login.component';
import {ErrorComponent} from "./error/error.component";
import {BackendUnavailableComponent} from "./backend-unavailable/backend-unavailable.component";
import { CreateItemComponent } from './create-item/create-item.component';
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ItemFilterPipe,
    LoginComponent,
    ErrorComponent,
    BackendUnavailableComponent,
    CreateItemComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ItemFilterPipe
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterLink,
        FormsModule
    ]
})
export class LayoutModule {
}
