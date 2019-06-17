import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import axios from "axios";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReadersComponent } from "./components/readers.component";
import { BooksComponent } from "./components/books.component";
import { RentsComponent } from "./components/rents.component";

axios.defaults.baseURL = "http://127.0.0.1:3333/";

@NgModule({
  declarations: [
    AppComponent,
    ReadersComponent,
    BooksComponent,
    RentsComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
