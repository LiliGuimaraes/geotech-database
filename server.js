const express = require("express");
const points = require("./schema.js");
const bodyParser = require('body-parser');
const db = require("./serverController")

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

        GET/points
        DELETE/points/:id
        POST/points{slug_name, coordinates(long/lat), data (' may6/1990 , EVI2LTGEE: index)}
    </pre>
    `
    res.send(hello)
})

app.get("/points", (req, res) => {
    points.find((error, response) => {
        // preciso tratar o erro, caso ocorra
        if (error) {
            // caso tenha algum erro
            return res.status(500).send(error);
        }
        // caso contrário, envio o retorno
        res.status(200).send(response);
    });
})


app.get("/points/:id", (req, res) => {
    points.findById(
        req.params.id,

        function(err, point) {
            if (err) return res.send(err);

            if (!point) return res.status(404).send({});
            console.log('*** maravilhosa.id:', point.id)
            res.send(point);
        }
    );
});

app.post("/points", (req, res) => {
    const newPoint = new maravilhosas({
        point_slug: req.body.point_slug,
        coordinates: req.body.coordinates,
        data: req.body.data,
    });

    newPoint.save(err => {
        if (err) return res.send(err);
        res.send(newPoint);
    });
});
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}...`));