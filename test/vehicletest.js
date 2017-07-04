"use strict";
const expect = require("chai").expect;

let Vehicle = require("../lib/vehicle");
let Car = Vehicle.Car;
let Lorry = Vehicle.Lorry;
let vehicle = Vehicle.Vehicle;


describe("Vehicle Class", () => {
    describe("Instance of car and lorry", () => {
        let car = new Car();
        let lorry = new Lorry();

        it("car should not be an instance of Lorry", () => {
            expect(car).to.not.be.instanceof(Lorry);
        });

        it("lorry should not be an instance of Car", () => {
            expect(lorry).to.not.be.instanceof(Car);
        });

        it("car and lorry should be instance of Vehicle", () => {
            expect(car).to.be.instanceof(vehicle);
            expect(lorry).to.be.instanceof(vehicle);
        });
    });

    describe("Property of car", () => {
        let car = new Car("Viper", 200, 2);

        it("car name should be Viper", () => {
            expect(car.name).to.equal("Viper");
        });

        it("car top speed should exceed 180", () => {
            expect(car.speedLimit).to.be.above(180);
        });

        it("car wheel count should not equal 6", () => {
            expect(car.numWheel).to.not.equal(6);
        });

        it("car category should be Car", () => {
            expect(car.category).to.equal("Car");
        });

        it("car top speed should equal 180", () => {
            expect(car.speedLimit).to.equal(200);
        });

        it("car door count should equal 2", () => {
            expect(car.numDoors).to.equal(2);
        });

        it("car wheel count should equal 4", () => {
            expect(car.numWheel).to.equal(4);
        });

        it("Invalid datatype input should return Invalid input", () => {
            expect(car.setSpeedLimit("120")).to.equal("Invalid input");
            expect(car.setName(() => {})).to.equal("Invalid input");
        });

    });

    describe("Property of lorry", () => {
        let lorry = new Lorry("MACK", 120, 2);

        it("lorry name should be MACK", () => {
            expect(lorry.name).to.equal("MACK");
        });

        it("Invalid datatype input should return Invalid input", () => {
            expect(lorry.setSpeedLimit("120")).to.equal("Invalid input");
            expect(lorry.setName(() => {})).to.equal("Invalid input");
        });

        it("lorry top speed should equal 120", () => {
            expect(lorry.speedLimit).to.equal(120);
        });

        it("lorry top speed should equal 120", () => {
            expect(lorry.speedLimit).to.equal(120);
        });

        it("lorry wheel count should not equal 6", () => {
            expect(lorry.numWheel).to.not.equal(6);
        });

        it("lorry category should be Lorry", () => {
            expect(lorry.category).to.equal("Lorry");
        });

        it("lorry wheel count should equal 10", () => {
            expect(lorry.numWheel).to.equal(10);
        });

        it("lorry top speed should exceed 80", () => {
            expect(lorry.speedLimit).to.be.above(80);
        });

        it("lorry door count should equal 2", () => {
            expect(lorry.numDoors).to.equal(2);
        });

    });

});