"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ReaderSchema extends Schema {
  up() {
    this.create("readers", table => {
      table.increments();
      table.string("name");
      table.string("address");
      table.timestamps();
    });
  }

  down() {
    this.drop("readers");
  }
}

module.exports = ReaderSchema;
