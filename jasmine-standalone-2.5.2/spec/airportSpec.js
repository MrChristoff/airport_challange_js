
describe('Airport', function() {
  var airport;
  var bigAirport;
  var weather = jasmine.createSpyObj('weather', ['conditions']);
  weather.conditions.and.callFake(function() {
    return "Sunny";
  });
  var plane = jasmine.createSpyObj('plane', ['landed']);
  plane.landed.and.callFake(function() {
    return true;
  });

  beforeEach(function() {
    airport = new Airport
  });

  describe('New Airport', function() {
    it('has default capacity of 5', function() {
      expect(airport.capacity).toBe(5)
    });
    it('can set its capacity to 10', function() {
      bigAirport = new Airport(weather, 10)
      expect(bigAirport.capacity).toBe(10)
    });
  });
  describe('Landing a plane', function() {
    it("plane is in landingSlots", function() {
      airport.landPlane(plane);
      expect(airport.landingSlots).toContain(plane)
    });
  });
  describe('take off a plane', function() {
    it("remove plane from landingSlots", function() {
      airport.landPlane(plane)
      airport.takeOffPlane(0);
      expect(airport.landingSlots.length).toBe(0)
    });
  });
});
