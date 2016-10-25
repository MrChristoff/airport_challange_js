describe('Plane', function() {

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe('new plane', function() {
    it('has landed set to false', function() {
      expect(plane.landed).toBe(false);
    });
  });

  describe('new plane', function() {
    it('has landed set to true', function() {
      plane.landed = true
      expect(plane.landed).toBe(true);
    });
  });
});
