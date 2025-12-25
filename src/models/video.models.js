import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";

const videoSchema = new mongoose.Schema(
  {
    videoFiles: {
      type: String, //conlunder
      required: true,
    },
    thumbnail: {
      type: String, //conlunder
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    videoOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video", videoSchema);
