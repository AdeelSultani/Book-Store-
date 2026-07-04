const express = require('express');
const router = express.Router();
const book=require('../controllers/book_controller')

router.post("/books", book.createBook);
router.get("/books", book.allBooks);
router.get("/books/:id", book.bookbyId);
router.delete("/books/:id", book.deleteBook);

module.exports=router