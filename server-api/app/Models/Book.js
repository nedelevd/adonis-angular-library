"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Book extends Model {
  rents() {
    return this.hasMany("App/Models/Rent");
  }
}

module.exports = Book;
