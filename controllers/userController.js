import User from '../models/userModel.js';

// CREATE USER
export const createUser = async (req, res) => {
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

// GET ALL USERS
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    if (!users || users.length === 0) {
      return res.status(404).send({
        success: false,
        message: 'User Not Found',
      });
    }
    res.status(201).send({
      success: true,
      users,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: 'Error in Get All User API',
      error: err.message,
    });
  }
};

// GET USER BY ID
export const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'User Not Found',
      });
    }
    res.status(201).send({
      success: true,
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: 'Error in get user by Id API',
      error: err.message,
    });
  }
};

// UPDATE USER
export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id; // گرفتن ID از URL
    const { name, email, address } = req.body;

    // بررسی وجود کاربر
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    // آپدیت کاربر
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email, address },
      { new: true, runValidators: true } // بازگشت داده جدید و ولیدیشن
    );

    return res.status(200).json({
      success: true,
      message: 'User updated successfully',
      user: updatedUser,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: 'Error in Update User API',
      error: err.message,
    });
  }
};

// DELETE USER
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      user,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: 'Error in Delete User API',
      error: err.message,
    });
  }
};
