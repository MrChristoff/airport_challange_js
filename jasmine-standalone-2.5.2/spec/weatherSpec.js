describe('Weather', function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });
  describe("new Weather", function() {
    it("has a condition less than 10", function() {
      spyOn(weather, 'randomNumber').and.returnValue(10)
      weather.weather()
      expect(weather.conditions).toBe("Stormy");
    });
    it("has a condition greater than 0", function() {
      spyOn(weather, 'randomNumber').and.returnValue(1)
      weather.weather()
      expect(weather.conditions).toBe("Sunny");
    });
  });
});
