require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const { insertCategory } = require("./functions/functions");

const CategoriesRoute = require("./routes/getCategories");
const RightsRoute = require("./routes/getRights");

const cors = require("cors");

app.use(cors());

app.use(express.json());
// extra packages

// routes

app.use("/api/v1/categories", CategoriesRoute);
app.use("/api/v1/rights", RightsRoute);

const port = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    // await insertCategory();
    app.listen(port, () =>
      console.log(`Server is listening on port ...${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
