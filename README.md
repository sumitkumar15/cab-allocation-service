## fuber

A simple cab allocation service.

Run `npm start` to start the service on port 3000, this will start service with empty cab pool.

To start server with some fake cab data added Run `node demo.js`

### Sample Api Calls
    Request for cab: POST on /cabs/hire
    {
        "userid": "abc",
        location: [50, 40],
        "color": "pink"
    }
    Response
    {
        "status": "success/failed",
        "rideid": 1234 / No Available cabs 
    }
    
    Request to end Ride: POST on /cabs/endride
    use the rideid from previous response
    {
        "rideid": 1234,
        "location": [20, 30]
    }
    Response
    {
        distance: 23
        amount: 100
    }

### How it Works
1. User requests a cab
2. Request is handled by '/hire' route in cabhandler.js
3. handler call `assignCab()` on singleton instance of AllocatorService, which in turn calls `findCab(location)`.
4. method `findCab()` finds the nearest cab from available cabs in `driverPool`, returns null if no cab is available.
5. After cab is found `Ride` class object is created which is added in `ongoingRides` Object, cab becomes busy & is removed from `driverPool`.
6. User requests to end ride giving his current location.
7. `endRide()` method from AllocatorService instance is called, & returns the user invoice, the cab is removed from ongoing & is added to `driverPool` for new requests.