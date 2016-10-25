function Airport(weather, capacity){
  var CAPACITY = 5
  this.landingSlots = [];
  this.capacity =  capacity || CAPACITY;
  this.weather = weather
};

Airport.prototype.landPlane = function (plane) {
  plane.landed = true;
  this.landingSlots.push(plane);
};

Airport.prototype.isSunny = function () {
  return weather.conditions
};

Airport.prototype.takeOffPlane = function (index) {
  this.landingSlots.splice(index, 1)
};
