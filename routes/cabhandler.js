var express = require('express')
var router = express.Router()
var allocator = require('../bookingservice/AllocatorService')
const bodyParser = require('body-parser')
router.use(bodyParser.json())

router.post('/:userid', (req, res) => {
  const params = req.params
  const body = req.body
  // Todo: implement cab allocation functionality here
})

module.exports = router
