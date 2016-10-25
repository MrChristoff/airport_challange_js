function Weather() {
  this.conditions = "unknown"
}

Weather.prototype.randomNumber = function () {
  return Math.floor(Math.random() * (10 - 0)) +1;
};

Weather.prototype.weather = function () {

  if (this.randomNumber() > 6) {
    this.conditions =  "Stormy"
  } else {
    this.conditions =  "Sunny"
  }
};
