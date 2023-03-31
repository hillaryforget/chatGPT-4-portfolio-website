const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/resume', (req, res) => {
  res.render('resume');
});

router.get('/projects', (req, res) => {
  res.render('projects');
});

router.get('/articles', (req, res) => {
  res.render('articles');
});

module.exports = router;

