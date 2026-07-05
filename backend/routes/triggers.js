var express = require('express');
var router = express.Router();
const { Trigger } = require("../models")

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const trigger = await Trigger.findAll();
    console.log("TRIGGGER", trigger)
    return res.json(trigger);
  } catch (err) {
    console.log("err", err)
    return res.status(500).json(err);
  }
});

module.exports = router;  