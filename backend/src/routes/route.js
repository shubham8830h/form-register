const express = require("express");
const router = express.Router();
const registerModel = require("../model/registerModel");
const expressAsyncHandler = require("express-async-handler");

router.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const checkdata = req.body.checkboxValues;
    const fdata = req.body.formData;

    const newUser = new registerModel({
      first_name: fdata.first_name,
      last_name: fdata.last_name,
      email: fdata.email,
      mobile_no: fdata.mobile_no,
      firm_name: fdata.firm_name,
      plan: fdata.plan,
      address: fdata.address,
      state: req.body.selectedOptionState,
      pin_code: fdata.pin_code,
      gst_no: fdata.gst_no,
      allopathic: checkdata.allopathic,
      generic: checkdata.generic,
      surgical: checkdata.surgical,
      otc: checkdata.otc,
      ayurvedic: checkdata.ayurvedic,
      veterinary: checkdata.veterinary,
      dl_no_1: fdata.dl_no_1,
      dl_no_2: fdata.dl_no_2,
      fassai_no: fdata.fassai_no,
      option: req.body.selectedOption,
      account_name: fdata.account_name,
      account_no: fdata.account_no,
      IFSC_Code: fdata.IFSC_Code,
      image: req.body.Name,
      branch: fdata.branch,
    });
    const userSave = await newUser.save();

    res.status(201).send({ message: "New Use Register", userSave });
  })
);

module.exports = router;
