const router = require("express").Router();
const booksController = require("../controllers/books");

// Matches with "/api/books"
router.route("/api/books/")
  .get(books.findAll)
  .post(book.create);

// Matches with "/api/books/:id"
router.route("api/books/:id")
  .delete(booksController.remove);

module.exports = router;
