const Book = require("../models/book");
const { validationResult } = require("express-validator");


const createBook = async (req, res) => {
    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const book = await Book.create(req.body);

        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: book
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


const allbooks = async (req, res) => {
    try {

        const books = await Book.find();

        res.status(200).json({
            success: true,
            data: books
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


const bookbyid = async (req, res) => {
    try {

        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        res.status(200).json({
            success: true,
            data: book
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

const updateBook = async (req, res) => {
    try {

    
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

      
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        book.title = req.body.title;
        book.author = req.body.author;
        book.price = req.body.price;
        book.isbn = req.body.isbn;
        book.publisheddate = req.body.publisheddate;

        await book.save();

     
        res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data: book
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
const deleteBook = async (req, res) => {
    try {

        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Book deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    createBook,
    allbooks,
    bookbyid,
    updateBook,
    deleteBook
};