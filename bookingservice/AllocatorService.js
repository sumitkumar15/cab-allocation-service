class Ride {
  constructor (pickup, drop, customer, cab) {
    this.pickupLocation = pickup
    this.dropLocation = drop
    this.customer = customer
    this.cab = cab
    this.rideId = Math.floor(Math.random() * 100000)
    this.startTime = Date.now()
    this.endTime = null
  }

  endRide () {
    this.endTime = Date.now()
  }

  rideDistance () {
    let l1 = this.pickupLocation
    let l2 = this.dropLocation
    return Math.sqrt(Math.pow(l1.lat - l2.lat, 2) + Math.pow(l1.long - l2.long, 2))
  }

  totalTime () { return (this.endTime - this.startTime) / 60 }

  calcAmount () {
    let _time = this.totalTime()
    let _dist = this.rideDistance()
    let amount = _time + (_dist * 2)
    if (this.cab.vehicle.color === 'pink') amount += 5
    return amount
  }
}

class AllocatorService {
  constructor () {
    if (!AllocatorService.instance) {
      AllocatorService.instance = this
      this.driverPool = [] // holds information of free cabs
      this.ongoingRides = {} // info about ongoing rides {requestId: Ride}
    }
    return AllocatorService.instance
  }

  assignCab (cabRequest, cab) {

  }

  findCab (cabRequest) {

  }

  endRide (endRequest) {

  }

  rejectRequest (cabRequest) {

  }
}

const instance = new AllocatorService()
Object.freeze(instance)
module.exports = instance
