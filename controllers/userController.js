import User from '../models/userModel.js';

// CREATE USER
export const create = async (req, res) => {
  try {
    const { name, email, address } = req.body;

    // VALIDATION
    if (!name || !email || !address) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    // CHECK IF USER EXISTS
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(409).json({
        success: false,
        message: 'User already exists',
      });
    }

    // CREATE USER
    const user = await User.create({ name, email, address });

    return res.status(201).json({
      success: true,
      message: 'User created successfully',
      user,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message,
    });
  }
};
