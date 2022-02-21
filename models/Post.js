const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    displayName: {
      type: String,
      default: "",
    },
    photoURL: {
      type: String,
      default: "",
    },
    postContent: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
    like: {
      type: Number,
      default: 0,
    },
    love: {
      type: Number,
      default: 0,
    },
    comment: {
      type: Array,
      default: [],
    },
    share: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
