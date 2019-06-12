const express = require("express");
const points = require("./schema.js");
const bodyParser = require('body-parser');
const db = require("./repository.js");

const PORT = process.env.PORT || 5000;
const MONGO_URL = "mongodb://localhost:27017/restoration";
// padrao: mongodb://dominio:porta/database

db.connect(MONGO_URL)
console.log('connect to mongodb')

const app = express();
app.use(bodyParser.json());

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
            console.log('*** point.id:', point.id)
            res.send(point);
        }
    );
});
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}...`));