import { Injectable } from "@angular/core";
import { Book } from "../models/book.model";
import { BaseService } from "./base-service.service";

@Injectable()
export class BookService extends BaseService<Book> {
  endpoint = "/api/books/";
}
