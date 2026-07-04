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

module.exports = {
    createBook,
    allbooks
};