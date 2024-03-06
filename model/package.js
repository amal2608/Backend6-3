const mongoose = require("mongoose")


let p2 = mongoose.Schema;
const packagedetailsschema = new p2({
    packid: String,
    packname: String,
    packtype:String,
    pprice: Number,

    pdescription: String,
    status: String,
    image: {
        data: Buffer,
        contentType: String,
    }
});

var packagedetailsmodel = mongoose.model("Package", packagedetailsschema)
module.exports = packagedetailsmodel;