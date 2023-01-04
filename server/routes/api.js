const express = require('express');
const router = express.Router();
const spiritController = require('../controllers/spiritController');
const Spirit = require('../models/dataModel');

router.delete('/spirits/:id', async (req, res) => {
  const obj = await Spirit.findOneAndDelete({ _id: req.params.id });
  res.status(200).json(obj);
});

module.exports = router;
