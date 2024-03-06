const mongoose = require("mongoose")


let event = mongoose.Schema;
const eventschema = new event({
    Eventid: String,
    Eventname: String,
    Amount: Number,
    Description: String,
    Eventtype:String,
    Status: String,
    Eventimage: {
        data: Buffer,
        contentType: String,
    }
});

var eventmodel = mongoose.model("Event", eventschema)
module.exports = eventmodel;