const router = require("express").Router();
const books = require("../controllers/books");


router.route("/api/books/")
  .get(books.findAll)
  .post(books.create);

router.route("/api/books/:id")
  .delete(books.remove);

module.exports = router;
