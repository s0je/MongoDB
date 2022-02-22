const mongoose = require("mongoose");

const CreedentialsSchema = new mongoose.Schema({
    address: String,
    phone: Number,
    email: {
            type: String,
            index: true,
            match: /.+\@.+\..+/
            }
})

module.exports = mongoose.model("Creedentials", CreedentialsSchema, "creedentials")