const cmsmaster = require("../../models/CmsMaster");
const express = require("express");
const router = express.Router();

router.get("/getall", async (req, res) => {
  const Productcategories = await cmsmaster.find();
  res.send(Productcategories);
});

router.post("/get", async (req, res) => {
  const Id = req.body.id;
  if (Id) {
    const cms = await cmsmaster.findById(Id);
    res.send(cms);
  } else {
    res.send({ errors: [{ msg: `nothing of ${Id}` }] });
  }
});

module.exports = router;
