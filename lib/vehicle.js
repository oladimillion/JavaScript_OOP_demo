"use strict";
class Vehicle {
    constructor(name, speedLimit, numDoors) {
        this.setName(name); //sets the name of a particular vehicle
        this.setSpeedLimit(speedLimit); //sets vehicles speed limit
        this.setNumDoors(numDoors); //sets the number of doors
    }

    setName(name) {
        if (typeof name != "string") {
            //ensures name is of string type
            return "Invalid input";
        }
        this._name = name;
    }

    setSpeedLimit(speedLimit) {
        if (typeof speedLimit != "number") {
            //ensures speedLimit is of int type
            return "Invalid input";
        }
        this._speedLimit = speedLimit;

    }

    setNumDoors(numDoors) {
        if (typeof numDoors != "number") {
            //ensures numDoors is of int type
            return "Invalid input";
        }
        this._numDoors = numDoors;
    }

    get name() {
        return this._name;
    }

    get speedLimit() {
        return this._speedLimit;
    }

    get numDoors() {
        return this._numDoors;
    }
}

class Car extends Vehicle {
    constructor(name, speedLimit, numDoors) {
        super(name, speedLimit, numDoors);
        this._numWheel = 4; //number of wheels
        this._category = "Car"; //Vehicle's category
    }

    get numWheel() {
        return this._numWheel;
    }

    get category() {
        return this._category;
    }
}

class Lorry extends Vehicle {
    constructor(name, speedLimit, numDoors) {
        super(name, speedLimit, numDoors);
        this._numWheel = 10; //number of wheels
        this._category = "Lorry"; //Vehicle's categorys
    }

    get numWheel() {
        return this._numWheel;
    }

    get category() {
        return this._category;
    }
}


module.exports = {
    Car: Car,
    Lorry: Lorry,
    Vehicle: Vehicle
};