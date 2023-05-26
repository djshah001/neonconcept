const cmsmaster = require("../../models/CmsMaster");
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.post(
  "/add",
  [body("tagLine").isLength({ min: 1 }).withMessage("Title cannot be empty")],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }

    await cmsmaster.create({
      tagLine: req.body.tagLine,
      description: req.body.description,
    });

    res.json({ msg: `Added` });
  }
);

module.exports = router;
