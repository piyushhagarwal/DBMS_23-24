require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const CategoriesRoute = require("./routes/getCategories");

const cors = require("cors");

app.use(cors());

app.use(express.json());
// extra packages

// routes

app.use("/api/v1/categories", CategoriesRoute);

const port = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ...${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
