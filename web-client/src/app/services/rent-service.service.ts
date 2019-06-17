import { Injectable } from "@angular/core";
import { Rent } from "../models/rent.model";
import { BaseService } from "./base-service.service";

@Injectable()
export class RentService extends BaseService<Rent> {
  endpoint = "/api/rents/";
}
