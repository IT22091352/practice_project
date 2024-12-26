const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const busSchema = new Schema({
    busNumber: {
        type: String,
        required: true
    },
    busName: {
        type: String,
        required: true
    },
    busType: {
        type: String,
        required: true
    },
    busCapacity: {
        type: Number,
        required: true
    },
    busRoute: {
        type: String,
        required: true
    },
    busStatus: {
        type: String,
        required: true
    },
    busDriver: {
        type: String,
        required: true
    },
    busConductor: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model(
    "BusModel",
    busSchema
)