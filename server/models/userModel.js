const mongoose = require("mongoose");

// const MONGO_URI =
//   "mongodb+srv://modest:password123456@cluster0.ljojbnu.mongodb.net/?retryWrites=true&w=majority";

// mongoose
//   .connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: "userInfo",
//   })
//   .then(() => console.log("Connected to Mongo DB."))
//   .catch((err) => console.log(err));

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
