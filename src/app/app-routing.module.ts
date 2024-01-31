import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { SpecialOffersComponent } from './pages/special-offers/special-offers.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "products", component: CollectionsComponent },
  { path: "collections", redirectTo: "products", pathMatch: "full" },
  { path: "special-offers", component: SpecialOffersComponent },
  { path: "about", component: AboutComponent },
  { path: "about-dripify", redirectTo: "about", pathMatch: "full" },
  { path: "dripify", redirectTo: "about", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
