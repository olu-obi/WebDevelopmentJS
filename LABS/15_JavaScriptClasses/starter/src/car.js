import MotorVehicle from "./motorvehicle.js"; // Importing the MotorVehicle class from motorvehicle.js
export default class Car extends MotorVehicle // Car class extending MotorVehicle 
{
   constructor(make, model, engineSize, doors, satNav = false , wheels) // Constructor with parameters
   {
      super(make, model, wheels = 4, engineSize); // Call the parent class constructor
      this._doors = doors; // Private property for doors
      this._satNav = satNav; // Private property for satNav
   }
    get doors() { return this._doors; } // Getter for doors
    get satNav() { return this._satNav; } // Getter for satNav

    set satNav(satNav) // Setter for satNav
    {
        this._satNav = satNav; // Set the value of satNav
    }
    
}