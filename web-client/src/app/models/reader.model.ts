import { BaseModel } from "./base-model.model";

export class Reader extends BaseModel {
  id: number;
  name: string = "";
  address: string = "";

  constructor(values: Object = {}) {
    super();
    Object.assign(this, values);
  }
}
