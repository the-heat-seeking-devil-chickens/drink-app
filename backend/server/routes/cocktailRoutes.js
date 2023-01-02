const express = require('express');
const router = express.Router();
const spiritController = require('../controllers/spiritController');

router.post('/', spiritController.createSpirit, (req, res) => {
  return res.status(200).json(res.locals.spirits);
});
router.get('/', spiritController.getSpirits, (req, res) => {
  return res.status(200).json(res.locals.spirits);
});

module.exports = router;
