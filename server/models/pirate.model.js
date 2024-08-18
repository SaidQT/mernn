const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [5, "Pirate name must be at least 5 characters long"],
        maxLength: [30, "Pirate name must be at most 30 characters"]
    },
    image:{ 
        type: String,
        required: [true, "Image Url is required"]
    },
    chests: {
        type: Number,
       
    },
    catchphrase: {
        type: String,
        required:[true, "Catchphrase is required"],
        minlength: [5, "Pirate name must be at least 5 characters long"],
    },
    position: {
        type: String,
        default: "Sailor"
    },
    pegleg: {
        type: Boolean,
        default: false


    },
    eyepatch:{
        type: Boolean,
        default: false
    },
    hookhand: {
        type:Boolean,
        default: false,
        validate: {
            validator: function(value) {
                return !value; 
            },
            message: "You can't add a Hook hand to this pirate."
        }
    }

}, { timestamps: true });
module.exports.Pirate = mongoose.model('Pirate', PirateSchema);