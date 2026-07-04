const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database");

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

///port

app.use("/api", require("./routes/bookroutes"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});