import MotorVehicle from "./motorvehicle.js"; // Import the MotorVehicle class from motorvehicle.js
import Car from "./car.js"; // Import the Car class from car.js
import Motorbike from "./motorbike.js"; // Import the Motorbike class from motorbike.js



const myVehicle = new MotorVehicle("myMake", "myModel", 4, 20000); // Create a new instance of MotorVehicle
console.log(myVehicle); // Access the make property
console.log(myVehicle.speed); // Access the speed property

myVehicle.accelerate(10); // Accelerate the vehicle for 10 seconds
console.log(myVehicle.speed); // Log the speed after acceleration

myVehicle.brake(5); // Brake the vehicle for 5 seconds
console.log(myVehicle.speed); // Log the speed after braking    

myVehicle.brake(5); // Brake the vehicle for 5 seconds
console.log(myVehicle.speed); // Log the speed after braking   

const myCar = new Car("Toyota", "Corolla", 1800, 4, false); // Create a new instance of Car
console.log(myCar); // Log the car instance

const myBike = new Motorbike("Yamaha", "MT-07", 689, "chain"); // Create a new instance of Motorbike
myCar.accelerate(5); // Accelerate the car for 10 seconds
myBike.accelerate(5); // Accelerate the motorbike for 10 seconds
console.log(myCar.speed); // Log the speed of the car after acceleration
console.log(myBike.speed); // Log the speed of the motorbike after acceleration

console.log(`${myCar.speed > myBike.speed ? 'Car' : 'Bike '} is faster` ); // Log which vehicle is faster

