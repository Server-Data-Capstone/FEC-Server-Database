const express = require('express');
const controller = require('../controllers/reviews');
const router = express.Router();

//from FEC


router.put('/:review_id/helpful', controller.putHelpful);
router.put('/:review_id/report', controller.putReport);
router.get('/meta', controller.getMeta);
router.get('/', controller.getReviews);
router.post('/', controller.postReview);


module.exports = router;