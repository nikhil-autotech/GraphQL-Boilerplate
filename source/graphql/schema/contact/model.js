const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  created_by: {
    type: mongoose.Types.ObjectId,
    ref: 'User' 
  }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
