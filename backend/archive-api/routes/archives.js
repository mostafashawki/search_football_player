const express = require("express");
const router = express.Router();

const Archive = require("../models/Archive");

// @route   GET /:id
// @desc    Get player archive by urlId
router.get("/:id", (req, res, next) => {
  Archive.findOne({ id: req.params.id, active: true })
    .then(archive => {
      console.log("archive is: ", archive);
      res.json(archive);
    })
    .catch(next);
});

// router.post("/archive", (req, res, next) => {
//   new Archive(req.body)
//     .save()
//     .then(data => {
//       res.json(data);
//     })
//   // .catch(err => {
//   //   const error = new Error(err);
//   //   error.status = 422;
//   //   next(error);
//   // });
//   //=====================save

// });

module.exports = router;
