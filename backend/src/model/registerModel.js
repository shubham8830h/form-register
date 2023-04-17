const mongoose = require("mongoose");

const regisetrSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    mobile_no: {
      type: Number,
      required: true,
      trim: true,
    },
    firm_name: {
      type: String,
      required: true,
      trim: true,
    },
    plan: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    pin_code: {
      type: Number,
      required: true,
      trim: true,
    },
    gst_no: {
      type: Number,
      required: true,
      trim: true,
    },

    allopathic: Boolean,
    generic: Boolean,
    surgical: Boolean,
    otc: Boolean,
    ayurvedic: Boolean,
    veterinary: Boolean,

    dl_no_1: {
      type: Number,
      required: true,
      trim: true,
    },
    dl_no_2: {
      type: Number,
      required: true,
      trim: true,
    },
    fassai_no: {
      type: Number,
      required: true,
      trim: true,
    },
    image: String,
    option: { type: String },
    account_name: {
      type: String,
      required: true,
      trim: true,
    },
    account_no: {
      type: Number,
      required: true,
      trim: true,
    },
    IFSC_Code: {
      type: Number,
      required: true,
      trim: true,
    },
    branch: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("registerData", regisetrSchema);
