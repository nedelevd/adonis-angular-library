"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Book = use("App/Models/Book");

/**
 * Resourceful controller for interacting with books
 */
class BookController {
  /**
   * Show a list of all books.
   * GET books
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ response }) {
    let books = await Book.query().fetch();
    return response.json(books);
  }

  /**
   * Create/save a new book.
   * POST books
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const title = request.input("title");
    const author = request.input("author");

    const book = new Book();
    book.title = title;
    book.author = author;

    await book.save();
    return response.json(book);
  }

  /**
   * Update book details.
   * PUT or PATCH books/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const title = request.input("title");
    const author = request.input("author");

    let book = await Book.findOrFail(params.id);
    book.title = title;
    book.author = author;

    await book.save();
    return response.json(book);
  }

  /**
   * Delete a book with id.
   * DELETE books/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, response }) {
    const book = await Book.findOrFail(params.id);
    await book.delete();
    return response.json({ message: "Book deleted!" });
  }
}

module.exports = BookController;
