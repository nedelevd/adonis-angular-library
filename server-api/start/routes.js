"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("welcome");

Route.post("/api/books", "BookController.store");
Route.get("/api/books", "BookController.index");
Route.put("/api/books/:id", "BookController.update");
Route.delete("/api/books/:id", "BookController.destroy");

Route.post("/api/readers", "ReaderController.store");
Route.get("/api/readers", "ReaderController.index");
Route.put("/api/readers/:id", "ReaderController.update");
Route.delete("/api/readers/:id", "ReaderController.destroy");

Route.post("/api/rents", "RentController.store");
Route.get("/api/rents", "RentController.index");
Route.put("/api/rents/:id", "RentController.update");
Route.delete("/api/rents/:id", "RentController.destroy");
