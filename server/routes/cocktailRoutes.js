const express = require('express');
const router = express.Router();
const spiritController = require('../controllers/spiritController');

router.post('/', spiritController.createSpirit);
router.get('/', spiritController.getSpirits, (req, res) => {
  res.status(200).json(res.locals.spirits);
});

module.exports = router;
