const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  contact: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value) => /\S+@\S+\.\S+/.test(value),
        message: 'Invalid email format',
      },
    },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: (value) => /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(value),
        message: 'Invalid phone number format (e.g., 555-123-4567)',
      },
    },
  },
  image: {
    type: String, // Assuming you store the image URL or path as a string
    required: true,
  },
}, { versionKey: false });

const volunteerModel = mongoose.model('Opportunitie', volunteerSchema);

module.exports = volunteerModel;
