var express = require('express');
var router = express.Router();

/* GET aboutMe page. */
router.get('/aboutMe', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
