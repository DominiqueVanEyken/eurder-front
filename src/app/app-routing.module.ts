import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemGalleryComponent} from "./layout/item-gallery/item-gallery.component";
import {LoginComponent} from "./layout/login/login.component";
import {ErrorComponent} from "./layout/error/error.component";
import {BackendUnavailableComponent} from "./layout/backend-unavailable/backend-unavailable.component";

const routes: Routes = [
  {path: '', component: ItemGalleryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'backendUnavailable', component: BackendUnavailableComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
