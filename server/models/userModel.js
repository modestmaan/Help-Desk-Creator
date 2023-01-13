const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre("save", function (next) {
  const user = this;

  bcrypt.hash(user.password, SALT_WORK_FACTOR, function (hashError, hash) {
    if (hashError) {
      return next(hashError);
    }

    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (error, isMatch) {
    if (error) {
      return callback(error);
    } else {
      callback(null, isMatch);
    }
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
