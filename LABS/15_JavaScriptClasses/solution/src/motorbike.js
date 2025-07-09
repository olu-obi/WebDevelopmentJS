// Step b.13
import MotorVehicle from './motorvehicle';

// Step b.14-18
export default class Motorbike extends MotorVehicle {

    constructor(make, model, engineSize, driveType, wheels) {
        super(make, model, wheels = 2, engineSize);

        this._driveType = driveType;
    }

    get driveType() {
        return this._driveType;
    }

    accelerate(time) {
        this._speed = this._speed + ((0.5 * this._engineSize/this._wheels) * time);
    }
}