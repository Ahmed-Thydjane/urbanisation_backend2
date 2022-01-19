const express = require("express");
const cors = require("cors");
const app = express();
const mongoose=require('mongoose');

var corsOptions = {
  origin: "*"
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*URL de la base de donne*/
const db_url='mongodb+srv://cheick:3AXse281qibWcFVL@cluster0.f51yr.mongodb.net/vhome?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

/*La connection se fait avec ORM mongoose */

mongoose
  .connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});