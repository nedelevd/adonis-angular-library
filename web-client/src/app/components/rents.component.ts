import { Component, OnInit } from "@angular/core";

import { Rent } from "../models/rent.model";
import { Reader } from "../models/reader.model";
import { Book } from "../models/book.model";

import { RentService } from "../services/rent-service.service";
import { ReaderService } from "../services/reader-service.service";
import { BookService } from "../services/book-service.service";

@Component({
  selector: "rents",
  templateUrl: "./rents.component.html",
  providers: [RentService, BookService, ReaderService]
})
export class RentsComponent implements OnInit {
  newRent: Rent = new Rent();
  rents: Rent[] = [];
  books: Book[] = [];
  readers: Reader[] = [];

  constructor(
    private rentService: RentService,
    private bookService: BookService,
    private readerService: ReaderService
  ) {}

  async ngOnInit() {
    this.rents = await this.rentService.getAll();
    this.books = await this.bookService.getAll();
    this.readers = await this.readerService.getAll();
  }

  async addRent() {
    if (!this.newRent.book_id || !this.newRent.reader_id) return;

    var saved: Rent = await this.rentService.add(this.newRent);
    this.rents.push(saved);
    this.newRent = new Rent();
  }

  async removeRent(rent) {
    await this.rentService.deleteById(rent.id);
    this.rents = this.rents.filter((item: Rent) => item.id !== rent.id);
  }

  async toggleRent(rent: Rent) {
    rent.returned = !rent.returned;
    await this.rentService.updateById(rent);
  }

  get sorted(): Rent[] {
    return this.rents.sort((item: Rent) => -item.id);
  }
}
