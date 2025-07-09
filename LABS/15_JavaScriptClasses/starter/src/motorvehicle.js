export default class MotorVehicle // Base class for all motor vehicles
{
    constructor(make, model, wheels, engineSize) // Constructor with parameters
    {
        this._make = make // Private property for make
        this._model = model // Private property for model
        this._wheels = wheels // Private property for wheels
        this._engineSize = engineSize // Private property for engine size
        this._speed = 0 // Private property for speed
    }
    get make() {return this._make}// Getter for make
    get model() {return this._model} // Getter for model
    get wheels() {return this._wheels}// Getter for wheels
    get engineSize() {return this._engineSize} // Getter for engine size
    get speed() {return this._speed} // Getter for speed

    accelerate(time) // Method to accelerate the vehicle
    {
        this._speed = this._speed + ((0.25* this._engineSize/this._wheels) * time) // Calculate speed based on engine size and wheels
    }

    brake(time) // Method to brake the vehicle
    {
        this._speed = (this._speed - ((0.3* this._engineSize/this._wheels) * time) >0 ) // Calculate speed reduction based on engine size and wheels
            ? this._speed - ((0.3 * this._engineSize / this._wheels) * time) 
            : 0; // Ensure speed does not go below zero
    }
}
