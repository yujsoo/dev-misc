const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "user must type name"],
      unique: true,
    },
    token: {
      type: String,
    },
    online: {
      // 나중에 유저가 온라인인지 오프라인인지 추가해보자
      type: Boolean,
      default: false,
    },
  },
  { timestamp: true }
);
module.exports = mongoose.model("user", userSchema);
