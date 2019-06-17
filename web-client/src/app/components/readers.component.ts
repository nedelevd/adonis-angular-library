import { Component, OnInit } from "@angular/core";
import { ReaderService } from "../services/reader-service.service";
import { Reader } from "../models/reader.model";

@Component({
  selector: "readers",
  templateUrl: "./readers.component.html",
  providers: [ReaderService]
})
export class ReadersComponent implements OnInit {
  newReader: Reader = new Reader();
  readers: Reader[] = [];

  constructor(private readerService: ReaderService) {}

  async ngOnInit() {
    this.readers = await this.readerService.getAll();
  }

  async addReader() {
    var saved: Reader = await this.readerService.add(this.newReader);
    this.readers.push(saved);
    this.newReader = new Reader();
  }

  async removeReader(reader) {
    await this.readerService.deleteById(reader.id);
    this.readers = this.readers.filter((item: Reader) => item.id !== reader.id);
  }

  get sorted(): Reader[] {
    return this.readers.sort((item: Reader) => -item.id);
  }
}
