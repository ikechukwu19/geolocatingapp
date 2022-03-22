const express = require("express");
const cors = require("cors");
const colors = require("colors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

//init express
const app = express();
//enable cors
app.use(cors());

//routes
app.use("/api/search/", require("./routes/searchResults"));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(`${__dirname}/public`))
}

app.listen(PORT, () =>
  console.log(`app started on port ${PORT}`.cyan.underline)
);
