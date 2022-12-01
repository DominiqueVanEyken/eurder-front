import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {AppRoutingModule} from "./app-routing.module";
import {LayoutComponent} from "./layout/layout/layout.component";
import {ItemGalleryComponent} from "./layout/item-gallery/item-gallery.component";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ItemGalleryComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
