const Book = require("../models/book");

const createBook = async (req, res) => {

    try {
        const book = await Book.create(req.body);
        
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({
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
const deleteBook = async (req, res) => {
    try {

        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        return res.status(200).json({
            message: "Book deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};
module.exports = {
    createBook,
    allBooks,
    bookbyId,
    deleteBook
};