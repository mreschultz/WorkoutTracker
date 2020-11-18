const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
     process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
     {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useCreateIndex: true,
       useFindAndModify: false
     }
   );

// routes
app.use(require("./Develop/routes/api.js"));
app.use(require("./Develop/routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});