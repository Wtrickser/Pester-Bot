
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes.js");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(require("routes"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pester-bot", 
{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

app.use(routes);

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});