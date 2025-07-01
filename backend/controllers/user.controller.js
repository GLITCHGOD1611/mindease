const User = require('../modules/user'); // Assuming this is your Mongoose model

const getalluser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const adduser = async (req, res) => {
  try {
    const user = new User(req.body); // Assuming frontend sends valid JSON
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getalluser,
  adduser
};
