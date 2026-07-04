const express = require('express');
const router = express.Router();
const book=require('../controllers/book_controller')

router.post("/books", book.createBook);
router.get("/books", book.allbooks);

module.exports=router