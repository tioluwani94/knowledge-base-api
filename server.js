const express = require("express");
const { errorHandler } = require("./middlewares/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/articles", require("./routes/articleRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
