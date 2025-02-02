const express = require('express');
const router = express.Router();
const spiritController = require('../controllers/spiritController');
const Spirit = require('../models/dataModel');

router.delete('/spirits/:id', async (req, res) => {
  try {
    const obj = await Spirit.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(obj);
  } catch (err) {
    console.log('delete failed');
    res.status(500).json({});
  }
});

router.put('/spirits/:id', async (req, res) => {
  try {
    console.log(req.params.id)
    const obj = await Spirit.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).json(obj);
  } catch (err) {
    console.log('update failed');
    res.status(500).json({});
  }
});

module.exports = router;
