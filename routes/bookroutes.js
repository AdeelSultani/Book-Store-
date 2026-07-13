const express = require('express');
const router = express.Router();
const book=require('../controllers/book_controller');
const bookValidation = require("../middleware/validators/bookValidator");

router.post("/books",bookValidation, book.createBook);
router.get("/books", book.allbooks);
router.get("/books/:id", book.bookbyid);
router.put("/book/:id",bookValidation, book.updateBook);
router.delete("/books/:id", book.deleteBook);
router.get("/bookspagination", book.allbookspagination);


module.exports=router