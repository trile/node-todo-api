/**
 * Created by trile on 12/8/16.
 */
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    email: {
        type: String,
        require: true,
        minlenngth: 1,
        trim: true
    }
});

let User = mongoose.model('User', userSchema);

module.exports = {User};