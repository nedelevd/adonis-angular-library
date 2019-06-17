import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ReadersComponent } from "./components/readers.component";
import { BooksComponent } from "./components/books.component";
import { RentsComponent } from "./components/rents.component";

const routes: Routes = [
  { path: "", component: RentsComponent },
  { path: "readers", component: ReadersComponent },
  { path: "books", component: BooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
