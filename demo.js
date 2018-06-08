var app = require('./app')
var allocator = require('./bookingservice/AllocatorService')
const Cab = require('./bookingservice/Cab')
const {Car, Location} = require('./bookingservice/utils')
const {Customer, Driver} = require('./bookingservice/Profiles')

// add some data to app to test & make api calls
for (let i = 0; i < 5; i++) {
  let c
  if (i % 3 === 0) c = new Car('Alto', 'ABC22', 'pink', 3)
  else c = new Car('Alto', 'ABC22', 'silver', 3)
  let d = new Driver({})
  let l = new Location(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000))
  allocator.addCabToPool(new Cab(c, d, l))
}
