import { BaseModel } from "./base-model.model";
import { Book } from "./book.model";
import { Reader } from "./reader.model";

export class Rent extends BaseModel {
  id: number;
  returned: boolean = false;
  reader_id: number;
  book_id: number;
  book: Book;
  reader: Reader;

  constructor(values: Object = {}) {
    super();
    Object.assign(this, values);
  }
}
