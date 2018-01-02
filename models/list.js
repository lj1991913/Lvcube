var mongoose = require('mongoose');
var a = new mongoose.Schema({
    title: String,
    cont: String,
    time: String
});
var list = mongoose.model('list', a);
module.exports = list;

