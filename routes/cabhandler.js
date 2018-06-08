var express = require('express')
var router = express.Router()
var allocator = require('../bookingservice/AllocatorService')
const {Customer} = require('../bookingservice/Profiles')
const {Location} = require('../bookingservice/utils')
const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.post('/hire', (req, res) => {
  const body = req.body
  var cust = new Customer(body)
  let resp = allocator.assignCab(cust)
  switch (resp.statuscode) {
    case -1: res.send({
      status: 'failed',
      desc: 'No Cabs available'
    })
      break
    case 1: res.send({
      status: 'success',
      rideid: resp.rideid
    })
  }
})

router.post('/endride', (req, res) => {
  const body = req.body
  let invoice = allocator.endRide(body.rideid, new Location(...body.location))
  res.send(invoice)
})

module.exports = router
