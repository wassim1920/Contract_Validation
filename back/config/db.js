// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// // const db = config.get('mongoURI');
// const db = process.env.MONGO;

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(db, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     });
//     console.log("MongoDB connected...");
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };
// export default connectDB;
// // module.exports = connectDB;
