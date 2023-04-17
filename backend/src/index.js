const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");
const userRouter = require("./routes/loginRoute");
const app = express();
const cors = require("cors");
// const { GridFsStorage } = require("multer-gridfs-storage");
// const fs = require("fs");
// const path = require("path");
// const multer=require("multer")

app.use(express.json());
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://shubham108h:LOhyTHS7kcSijNsz@cluster0.ovhwygy.mongodb.net/shubham108h",
    { useNewUrlParser: true }
  )
  .then(() => console.log("mongoDb is connected..."))
  .catch((err) => console.log(err));

app.use("/", route);
app.use("/user", userRouter);
// const storage = new GridFsStorage({
//   url: "mongodb://localhost:27017/signature-upload",
//   options: { useNewUrlParser: true, useUnifiedTopology: true },
//   file: (req, file) => {
//     return {
//       filename: `signature-${Date.now()}${path.extname(file.originalname)}`,
//       bucketName: "signatures",
//     };
//   },
// });


const port = process.env.PORT || 3001;




















app.listen(port, () => {
  console.log(`Backend is running on ${port}`);
});
