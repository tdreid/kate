var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const resourceModel = new Schema({
  id: {
    type: String
  },
  payload: {}
});

module.exports = mongoose.model('Resource', resourceModel);
