const mongoose = require('mongoose');

//create schema
var Schema = mongoose.Schema;

var restorationSchema = new Schema({
    point_slug: { type: String, default: true },
    coordinates: { type: GeoJSON, default: true },
    data: { type: Date, contentType: Number, default: true }
})

// exporto este módulo
const restoration = mongoose.model("restoration", restoration);

module.exports = restoration;