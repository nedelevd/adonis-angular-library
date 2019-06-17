import { Component, OnInit } from "@angular/core";
import { BookService } from "../services/book-service.service";
import { Book } from "../models/book.model";

@Component({
  selector: "books",
  templateUrl: "./books.component.html",
  providers: [BookService]
})
export class BooksComponent implements OnInit {
  newBook: Book = new Book();
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  async ngOnInit() {
    this.books = await this.bookService.getAll();
  }

  async addBook() {
    var saved: Book = await this.bookService.add(this.newBook);
    this.books.push(saved);
    this.newBook = new Book();
  }

  async removeBook(book) {
    await this.bookService.deleteById(book.id);
    this.books = this.books.filter((item: Book) => item.id !== book.id);
  }

  get sorted(): Book[] {
    return this.books.sort((item: Book) => -item.id);
  }
}
