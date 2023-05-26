const axios = require('axios');
const dbGetReviews = require('../database/query/dbGetReviews')
const dbGetMeta = require('../database/query/dbGetMeta')
const dbMarkHelpful = require('../database/query/dbMarkHelpful')
const dbMarkReported = require('../database/query/dbMarkReported')
const dbPostReview = require('../database/query/dbGetReviews')

module.exports = {
  getReviews: (req, res) => {
    const product_id = req.query.product_id;
    const page = req.query.page || 1;
    const count = req.query.count || 5;
    const sort = req.query.sort || 'relevant'

    dbGetReviews({product_id, page, count, sort})
      .then((data) => {
        // console.log('this is data', data)
        res.status(200).send(data)
      })
      .catch((err) => {
        console.log(`ERROR CONTROLLERS GETREVIEWS`, err)
        res.status(404).send(err)
      })
  },
  getMeta: (req, res) => {
    dbGetMeta(req.query.product_id)
      .then((data) => {
        res.status(200).send(data)
      })
      .catch((err) => {
        console.log('ERROR CONTROLLERS GETMETA', err)
        res.status(404).send(err)
      })
  }
}