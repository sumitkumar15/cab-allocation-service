class Cab {
  constructor (cabId, car, driver, location) {
    this.id = cabId
    this.vehicle = car
    this.driver = driver
    this.location = location
  }

  getLocation () {
    return this.location
  }

  setLocation (location) {
    this.location = location
  }

  callCab (location) {
    // assigns cab to customer
  }
}

module.exports = Cab
