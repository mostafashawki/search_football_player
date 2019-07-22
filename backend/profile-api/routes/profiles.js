const express = require("express");
const router = express.Router();

const Profile = require("../models/Profile");

// @route   GET /:profileId
// @desc    Get player profile by urlId
router.get("/:profileId", (req, res, next) => {

  Profile.findOne({ profileId: req.params.profileId })
    .then(profile => {
      console.log("archive is: ", profile);
      res.json(profile);
    })
    .catch(next);
});





module.exports = router;
