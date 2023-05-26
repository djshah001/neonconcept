const cmsmaster = require("../../models/CmsMaster");
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.post(
  "/update",
  [
    body("tagLine")
      .isLength({ min: 1 })
      .withMessage("Tag Line cannot be empty"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }

    const id = req.body.id;
    console.log(id)
    try {
      if (id) {
        const p = await cmsmaster.findByIdAndUpdate(id, {
          tagLine: req.body.tagLine,
          description: req.body.description,
        });

        res.json({ msg: `Updated` });
      }
      else{
        res.json({ errors: [{ msg: `Enter valid id` }] });
      }
    } catch (error) {
      res.send({ errors: [{ msg: `error occured` }] });
    }
  }
);

module.exports = router;
