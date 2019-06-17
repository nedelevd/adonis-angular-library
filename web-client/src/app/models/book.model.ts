import { BaseModel } from "./base-model.model";

export class Book extends BaseModel {
  id: number;
  title: string = "";
  author: string = "";

  constructor(values: Object = {}) {
    super();
    Object.assign(this, values);
  }
}
