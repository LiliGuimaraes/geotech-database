const mongoose = require('mongoose');

//create schema
var Schema = mongoose.Schema;

var restorationSchema = new Schema({
    point_slug: { type: String, default: true },
    coordinates: { type: String, default: true },
    data: { type: Date, contentType: Number, default: true }
})

restorationSchema.virtual("id").get(function() {
    return this._id;
});

// exporto este módulo
const points = mongoose.model("points", restorationSchema);

module.exports = points;