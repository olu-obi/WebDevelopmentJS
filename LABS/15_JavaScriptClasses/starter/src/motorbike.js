import MotorVehicle from './motorvehicle.js'; // Import the MotorVehicle class from motorvehicle.js
export default class Motorbike extends MotorVehicle // Motorbike class extending MotorVehicle
{
    constructor(make, model, engineSize, driveType, wheels = 2) // Constructor with parameters
    {
        super(make, model, wheels =2, engineSize ); // Call the parent class constructor  
        this._driveType = driveType; // Private property for drive type  
    }
    get driveType() { return this._driveType; } // Getter for drive type
    accelerate(time) // Method to accelerate the motorbike
    {
        this._speed = this._speed + ((0.5 * this._engineSize / this._wheels) * time); // Calculate speed based on engine size and wheels
    }
}


