"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Reader = use("App/Models/Reader");

/**
 * Resourceful controller for interacting with readers
 */
class ReaderController {
  /**
   * Show a list of all readers.
   * GET readers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ response }) {
    let readers = await Reader.query().fetch();
    return response.json(readers);
  }

  /**
   * Create/save a new reader.
   * POST readers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const name = request.input("name");
    const address = request.input("address");

    const reader = new Reader();
    reader.name = name;
    reader.address = address;

    await reader.save();
    return response.json(reader);
  }

  /**
   * Update reader details.
   * PUT or PATCH readers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const name = request.input("name");
    const address = request.input("address");

    let reader = await Reader.findOrFail(params.id);
    reader.name = name;
    reader.address = address;

    await reader.save();
    return response.json(reader);
  }

  /**
   * Delete a reader with id.
   * DELETE readers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, response }) {
    const reader = await Reader.findOrFail(params.id);
    await reader.delete();
    return response.json({ message: "Reader deleted!" });
  }
}

module.exports = ReaderController;
