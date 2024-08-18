const mongoose = require('mongoose');
require('dotenv').config();
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@cluster0.js0ybrx.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));


//The dotenv package is used to load environment variables from a .env file into process.env in Node.js applicationsconst dbName = process.env.DB;
