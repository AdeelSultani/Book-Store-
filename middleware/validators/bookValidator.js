const { body } = require("express-validator");

const bookValidation = [

    body("title")
        .notEmpty()
        .withMessage("Title is required")
        .isLength({ min: 3 })
        .withMessage("Title must be at least 3 characters"),

    body("author")
        .notEmpty()
        .withMessage("Author is required"),

    body("price")
        .notEmpty()
        .withMessage("Price is required")
        .isFloat({ min: 1 })
        .withMessage("Price must be greater than 0"),

    body("isbn")
        .notEmpty()
        .withMessage("ISBN is required")
        .isLength({ min: 6, max: 13 })
        .withMessage("ISBN must be 6 to 13 characters"),

    body("publisheddate")
        .notEmpty()
        .withMessage("Published date is required")
        .isISO8601()
        .withMessage("Enter a valid date")
];

module.exports = bookValidation;