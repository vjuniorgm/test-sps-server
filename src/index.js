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

const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin123@localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'nachowen' // o cualquier nombre de base de datos
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));
