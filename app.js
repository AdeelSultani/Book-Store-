const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database");
const bookroutes=require('./routes/bookroutes')

dotenv.config();

const app = express();


connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", bookroutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});