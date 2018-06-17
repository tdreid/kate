const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Resource = require('../models/resourceModel');

mongoose.connect('mongodb://localhost/resources');

router
  .route('/')
  .get((req, res, next) => {
    Resource.find(req.query, (err, resources) => {
      if (err) {
        next(err);
      } else {
        res.json(resources);
      }
    });
  })
  .post((req, res, next) => {
    try {
      const resource = new Resource(req.body);
      resource.save();
      res.status(201).json(resource);
    } catch (err) {
      next(err);
    }
  });

router.route('/:id').get((req, res, next) => {
  Resource.findById(req.params.id, (err, resources) => {
    if (err) {
      next(err);
    } else {
      res.json(resources);
    }
  });
});

module.exports = router;
