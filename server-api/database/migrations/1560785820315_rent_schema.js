"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RentSchema extends Schema {
  up() {
    this.create("rents", table => {
      table.increments();
      table.boolean("returned");
      table
        .integer("book_id")
        .unsigned()
        .references("id")
        .inTable("books");
      table
        .integer("reader_id")
        .unsigned()
        .references("id")
        .inTable("readers");
      table.timestamps();
    });
  }

  down() {
    this.drop("rents");
  }
}

module.exports = RentSchema;
