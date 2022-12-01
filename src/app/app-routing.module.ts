import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemGalleryComponent} from "./layout/item-gallery/item-gallery.component";

const routes: Routes = [
  // {path: 'setup-date/:name', component: SetupDateComponent},
  {path: '', component: ItemGalleryComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
