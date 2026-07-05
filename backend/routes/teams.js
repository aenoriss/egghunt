var express = require('express');
var router = express.Router();
const { Team } = require("../models")
const { Trigger } = require("../models")

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const teams = await Team.findAll({
      include: [
        { model: Trigger }
      ]
    });
    console.log("TEAM", teams)
    return res.json(teams);
  } catch (err) {
    console.log("TEAM", err)
    return res.status(500).json(err);
  }
});

module.exports = router;