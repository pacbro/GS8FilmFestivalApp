// Remember to remove 'mongoose' from package.json
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagsSchema = new Schema({
    tag: { type: String, required: true }
});

// Remember to remove 'mongoose' from package.json
module.exports = mongoose.model('Tags', TagsSchema);
