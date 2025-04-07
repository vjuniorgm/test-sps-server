require('dotenv').config();
require('./init');
const express = require("express");
const routes = require("./routes/user.routes");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors());

app.use("/api/users", routes);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
