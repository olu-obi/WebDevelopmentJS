// Step a.13
import MotorVehicle from './motorvehicle';
// Step b.10
import Car from './car';
// Step b.21
import Motorbike from './motorbike';

// Step a.14
const myVehicle = new MotorVehicle("myMake", "myModel", 4, 2000);

// Step a.15
console.log(myVehicle);
console.log(myVehicle.speed);

// Steps a.16-19
myVehicle.accelerate(10);
console.log(myVehicle.speed);
myVehicle.brake(5);
console.log(myVehicle.speed);
myVehicle.brake(5);
console.log(myVehicle.speed);

// Step b.11-12
const myCar = new Car("BMW", "320dGT", 2000, true);
console.log(myCar);

// Step b.22
const myBike = new Motorbike("Kawasaki", "Ninja", 650, "chain");

// Step b.23
console.log(`Who wins in an acceleration race? myCar or myBike?`);
myCar.accelerate(10);
myBike.accelerate(10);
console.log(`After 10 seconds:
myCar is going at ${myCar.speed} m/s;
myBike is going at ${myBike.speed} m/s;
Therefore ${myCar.speed > myBike.speed ? 'myCar' : 'myBike'} wins!`);
