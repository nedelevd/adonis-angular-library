import { Injectable } from "@angular/core";
import axios from "axios";

import { BaseModel } from "../models/base-model.model";

export class BaseService<T extends BaseModel> {
  endpoint;

  async add(obj: T): Promise<T> {
    var response = await axios.post(this.endpoint, obj);
    return response.data;
  }

  async deleteById(id: number): Promise<void> {
    await axios.delete(`${this.endpoint}${id}/`);
  }

  async updateById(obj: T): Promise<T> {
    var id: number = obj.id;
    await axios.put(`${this.endpoint}${id}/`, obj);
    return obj;
  }

  async getAll(): Promise<T[]> {
    var response = await axios.get(this.endpoint);
    return response.data;
  }
}
