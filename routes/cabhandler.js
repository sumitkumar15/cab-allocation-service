var express = require('express')
var router = express.Router()
var allocator = require('../bookingservice/AllocatorService')
const {Customer} = require('../bookingservice/Profiles')
const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.post('/hire', (req, res) => {
  const params = req.params
  const body = req.body
  var cust = new Customer(body)
  // Todo: implement cab allocation functionality here
})

module.exports = router
