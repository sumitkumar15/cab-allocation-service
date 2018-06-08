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
    // calls cab to location
  }

  getDistance (loc) {
    // gets distance b/w cab & given location
    let l1 = this.location
    let l2 = loc
    return Math.sqrt(Math.pow(l1.lat - l2.lat, 2) + Math.pow(l1.long - l2.long, 2))
  }

  getColor () { return this.vehicle.color }
}

module.exports = Cab
