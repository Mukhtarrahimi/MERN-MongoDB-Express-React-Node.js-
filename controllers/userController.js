import { error } from 'console';
import User from '../models/userModle.js';

// CREATE
export const create = async (req, res) => {
  try {
    const { name, email, address } = req.body;
    // validation
    if (!name || !email || !address) {
      return res.status(401).send({
        success: false,
        message: 'All Failed are required',
      });
    }
    // cheak exist
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).send({
        success: false,
        message: 'User Already Exist',
      });
    }
    const user = await User.create({
      name,
      email,
      address,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: 'Error in create API',
      error: err.message,
    });
  }
};
