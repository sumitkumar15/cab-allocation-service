class Location {
  constructor (lat, long) {
    this.lat = lat
    this.long = long
  }
}

class Car {
  constructor (model, regNo, color, capacity) {
    this.model = model
    this.regNo = regNo
    this.color = color
    this.capacity = capacity
  }
}

module.exports = {
  Location, Car
}
