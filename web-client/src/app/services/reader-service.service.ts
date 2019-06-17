import { Injectable } from "@angular/core";
import { Reader } from "../models/reader.model";
import { BaseService } from "./base-service.service";

@Injectable()
export class ReaderService extends BaseService<Reader> {
  endpoint = "/api/readers/";
}
