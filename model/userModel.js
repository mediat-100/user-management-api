const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please input your name'],
  },
  email: {
    type: String,
    required: [true, 'Please input your email address'],
    unique: true,
    validate: [validator.isEmail, 'Please input a valid email address'],
    lowercase: true,
  },
  photo: {
    type: String,
    default: 'default.png',
  },
  password: {
    type: String,
    required: [true, 'Please input your password'],
    minlength: 8,
    maxlength: 16,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: 'Please ensure the passwords are the same',
    },
  },
});

userSchema.pre('save', async function (next) {
  // run this function only when password is created or modified
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  // Render passwordConfirm undefined since its not needed in the DB
  this.passwordConfirm = undefined;

  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
