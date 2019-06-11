const express = require("express");
const restoration = require("./schema.js");
const bodyParser = require('body-parser');
const db = require("./repository.js");

const PORT = process.env.PORT || 5000;
const MONGO_URL = "mongodb://localhost:27017/admin";
// padrao: mongodb://dominio:porta/database

db.connect(MONGO_URL)
console.log('connect to mongodb')