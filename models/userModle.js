import mongoose from 'mongoose';

export const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    trim: true,
    match: 'A-Za-z0-9#$',
  },
  address: {
    type: String,
    required: [true, 'address is required'],
    default: 'Kabul - Afghanstan',
  },
});
