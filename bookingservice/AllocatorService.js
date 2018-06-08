class Ride {
  constructor (pickup, customer, cab) {
    this.pickupLocation = pickup // object of Location class
    this.customer = customer
    this.cab = cab  // Object of Cab
    this.rideId = Math.floor(Math.random() * 100000)
    this.startTime = Date.now()
    this.endTime = null
    this.destination = null
  }

  endRide (loc) {
    this.endTime = Date.now()
    this.destination = loc
  }

  rideDistance () {
    let l1 = this.pickupLocation
    let l2 = this.destination
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

  assignCab (customer) {
    let loc = customer.location
    let color = customer.colorPref
    let cabIndex = this.findCab(loc, color)
    if (cabIndex == null) {
      return this.rejectRequest()
    } else {
      let cab = this.driverPool[cabIndex]
      this.removeCabFromPool(cabIndex)
      let ride = new Ride(loc, customer, cab)
      this.addRide(ride)
      return this.acceptRequest(ride.rideId)
    }
  }

  removeCabFromPool (index) {
    this.driverPool.splice(index, 1)
  }

  addCabToPool (cab) {
    this.driverPool.push(cab)
  }

  addRide (ride) {
    this.ongoingRides[ride.rideId] = ride
  }

  findCab (location, color) {
    if (this.driverPool.length === 0) return null
    let cabs = this.driverPool
    let index = -1
    let minDist = Infinity
    for (let i = 0; i < cabs.length; i++) {
      let cab = cabs[i]
      let dist = cab.getDistance(location)
      if (color != null) {
        if (dist < minDist && cab.getColor() === color) {
          index = i
          minDist = dist
        }
      } else {
        if (dist < minDist) {
          index = i
          minDist = dist
        }
      }
    }
    return index === -1 ? null : index
  }

  endRide (rideId, loc) {
    let ride = this.ongoingRides[rideId]
    delete this.ongoingRides[rideId]
    ride.endRide(loc)

    let cab = ride.cab
    cab.setLocation(loc)   // ride ends
    this.addCabToPool(cab) // cab is ready to be added to pool again
    let invoice = this.rideInvoice(ride)
    return invoice
  }

  rideInvoice (ride) {
    return {
      statuscode: 2,
      distance: ride.rideDistance(),
      amount: ride.calcAmount()
    }
  }

  rejectRequest () {
    return {statuscode: -1}
  }

  acceptRequest (id) {
    return {
      statuscode: 1,
      rideid: id
    }
  }
}

const instance = new AllocatorService()
Object.freeze(instance)
module.exports = instance
