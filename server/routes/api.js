const express = require('express');
const router = express.Router();
const spiritController = require('../controllers/spiritController');

router.delete('/spirits/:id', (req, res) => {
  res.status(200).json({ asdf: 'qwer2' });
});

module.exports = router;
