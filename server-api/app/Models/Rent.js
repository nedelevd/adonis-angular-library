"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Rent extends Model {
  book() {
    return this.belongsTo("App/Models/Book");
  }

  reader() {
    return this.belongsTo("App/Models/Reader");
  }
}

module.exports = Rent;
