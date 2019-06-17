"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Rent = use("App/Models/Rent");

/**
 * Resourceful controller for interacting with rents
 */
class RentController {
  /**
   * Show a list of all rents.
   * GET rents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ response }) {
    let readers = await Rent.query()
      .with("reader")
      .with("book")
      .fetch();
    return response.json(readers);
  }

  /**
   * Create/save a new rent.
   * POST rents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const book_id = request.input("book_id");
    const reader_id = request.input("reader_id");
    const returned = request.input("returned");

    const rent = new Rent();
    rent.book_id = book_id;
    rent.reader_id = reader_id;
    rent.returned = returned;

    await rent.save();
    await rent.load("book");
    await rent.load("reader");

    return response.json(rent);
  }

  /**
   * Update rent details.
   * PUT or PATCH rents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const book_id = request.input("book_id");
    const reader_id = request.input("reader_id");
    const returned = request.input("returned");

    const rent = await Rent.findOrFail(params.id);
    rent.book_id = book_id;
    rent.reader_id = reader_id;
    rent.returned = returned;

    await rent.save();
    await rent.load("book");
    await rent.load("reader");

    return response.json(rent);
  }

  /**
   * Delete a rent with id.
   * DELETE rents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, response }) {
    const rent = await Rent.findOrFail(params.id);
    await rent.delete();
    return response.json({ message: "Rent deleted!" });
  }
}

module.exports = RentController;
