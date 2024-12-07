import UserModel from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.json({
      message: "Successfully to get all data!",
      error: false,
      success: true,
      users,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    return res.json({
      message: "Successfully to get data!",
      error: false,
      success: true,
      user,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

export const saveUser = async (req, res) => {
  const user = new UserModel(req.body);
  try {
    const insertUser = await user.save();
    return res.status(201).json({
      message: "Successfully to insert data!",
      error: false,
      success: true,
      insertUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await UserModel.updateOne({ _id: req.params.id }, { $set: { name: req.body.name, email: req.body.email, gender: req.body.gender } });
    return res.status(200).json({
      message: "Successfully to updated data!",
      error: false,
      success: true,
      updatedUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleteUser = await UserModel.deleteOne({ _id: req.params.id });
    return res.status(200).json({
      message: "Successfully to delete data!",
      error: false,
      success: true,
      deleteUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};
