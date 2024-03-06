import mongoose from "mongoose";

const UserSchema =  new mongoose.Schema({
  username: {
      type: String,
      required: true,
      unique: true
  },
  password :{
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true,
      // unique: true
  },
  privilege: {
      type: Number
  },
  login_session_key: {
      type: String
  },
  email_status: {
      type: String,
      default: "not confirmed",
  },
  password_expiry_date: {
      type: Date
  },
  passowrd_reset_key: {
      type: String
  },
  account_status: {
      type: String, 
      required: true,
      default: 'inactive',
  }
},{versionKey: false});


export default mongoose.model("User", UserSchema);
