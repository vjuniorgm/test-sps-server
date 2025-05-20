// stores/userStore.js
const User = require('../models/user.model');

const userStore = {
  async create(userData) {
    const user = new User(userData);
    await user.save();
    return user;
  },

  async findAll() {
    return await User.find();
  },

  async findById(id) {
    return await User.findById(id);
  },

  async findByEmail(email) {
    return await User.findOne({ email });
  },

  async deleteById(id) {
    return await User.findByIdAndDelete(id);
  },

  async clear() {
    return await User.deleteMany({});
  }
};


module.exports = userStore;
