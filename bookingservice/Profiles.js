const {Location} = require('../bookingservice/utils')
// takes object of type person as constructor argument
class Driver {
  constructor (person) {
    this.personalDetails = person
  }
}

class Customer {
  constructor (requestParams) {
    this.userid = requestParams.userid
    this.location = new Location(...requestParams.location)
    this.colorPref = requestParams.color
  }
}

module.exports = {Customer, Driver}
