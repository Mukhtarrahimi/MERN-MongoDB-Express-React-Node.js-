import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'invalid email format'],
  },
  address: {
    type: String,
    required: [true, 'address is required'],
    default: 'Kabul - Afghanistan',
  },
});

export default mongoose.model('User', userSchema);
