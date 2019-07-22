const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ArchiveSchema = new Schema({
    id: {
        type: String,
        max: 50,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    profileId: {
        type: String,
        max: 50,
        required: true
    }
});

module.exports = Archive = mongoose.model("archive", ArchiveSchema);
