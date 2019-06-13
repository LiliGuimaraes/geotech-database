const express = require("express");
const points = require("./schema.js");
const bodyParser = require('body-parser');
const db = require("./serverController.js");

const PORT = process.env.PORT || 5000;
const MONGO_URL = "mongodb://localhost:27017/restoration";
// padrao: mongodb://dominio:porta/database

db.connect(MONGO_URL)
console.log('connect to mongodb')

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
    const hello = `
    <pre>
        Este é  o Geotech database
        where you can see/use geographical information (coordinate and EVI2 index value)
        of some random points found and tag as "potencial 
        restoration areas in Minas Gerais/Brazil", using the libray geospatial to
        reconstruct spectral trajectory of a pixel "Landtrend" .

        GET/points == 
        DELETE/poinst/:id
        POST/points{slug_name, coordinates(long/lat), data (' may6/1990 , EVI2LTGEE: index)}
    </pre>
    `

    res.send(hello)
})


app.get("/points", (req, res) => {
    res.send(controller.getAll())
})

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}...`));