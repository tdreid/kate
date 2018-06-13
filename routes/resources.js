const express = require('express');
const router = express.Router();

router.route('/Resources').get((req, res) => {
  res.json({ id: 1, payload: { message: 'This is my payload.' } });
});

module.exports = router;
