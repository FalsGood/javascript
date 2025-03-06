// Some code
function motorcycle(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
   
  motorcycle.prototype.drive = function() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
   
  motorcycle.prototype.reverse = function() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
   
  motorcycle.prototype.turn = function() {
    console.log(`${this.brand} ${this.color} is turning`);
  }
  

  const motorcycle1 = new motorcycle('Kawasaki','BlackGreen',998,'ka-7');
  const motorcycle2 = new motorcycle('Yamaha','RedBlack',500,'ya-7');
  const motorcycle3 = new motorcycle('Harleydavidson','BlackOrange',1900,'ha-7');

  console.log(motorcycle1);
  console.log(motorcycle2);
  console.log(motorcycle3);

  motorcycle1.drive();
  motorcycle2.drive();
  motorcycle3.drive();