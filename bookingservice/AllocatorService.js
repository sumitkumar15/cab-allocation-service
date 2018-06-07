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
