const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Resource = require('../models/resourceModel');

mongoose.connect('mongodb://localhost/resources');

router.route('/Resources').get((req, res) => {
  Resource.find(req.query, (err, resources) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(resources);
    }
  });
});

module.exports = router;
