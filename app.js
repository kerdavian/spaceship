class SpaceShip {
  constructor(fuel, ...passengers) {
    this.passengers = passengers;
    this.fuel = fuel;
    this.shields = true;
    this.speedometer = 0;

  }

  listPassengers() {
    if (this.passengers) {
      for (let i = 0; i < this.passengers.length; i++) {
        console.log('Passenger ' + (i + 1) + ': ' + this.passengers[i]);
      }
    }
  }

  addPassenger(newPassenger) {
    this.passengers.push(newPassenger);
    console.log(newPassenger + ' was added to the ship.');
  }

  travel(distance) {
    console.log('tryig to travel: ' + distance);
    if (this.fuel === 0) {
      console.log('can not go further, tank is empty');
      return;
    }

    let remainFuel = this.fuel - (distance / 2);

    if (remainFuel >= 0) {
      if (this.fuel <= 30) {
        console.log('fuel is low, turning off shields...');
        this.shields = false;
      }
      this.speedometer = this.speedometer + distance;
      this.fuel = this.fuel - (distance / 2);

    } else {
      let doableDistance = this.fuel * 2;
      console.log('can only travel: ' + doableDistance);
      this.speedometer = this.speedometer + doableDistance;
      this.fuel = 0;
    }

    console.log('the SpaceShip is at: ' + this.speedometer);
    console.log('the SpaceShip has: ' + this.fuel + ' fuel');
  }
}


let mySpaceship = new SpaceShip(400, 'John', 'Steve', 'Sam', 'Daniel');

mySpaceship.listPassengers();
mySpaceship.addPassenger('Lindsay');
mySpaceship.listPassengers();
mySpaceship.travel(750);
mySpaceship.travel(200);
mySpaceship.travel(100);

