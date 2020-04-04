"use strict";

class Car {
  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  static getSpecs({ maxSpeed, speed, isOn, distance, price }) {
    console.log(
      `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`
    );
  }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
  }

  accelerate(value) {
    this.speed =
      this.speed + value <= this.maxSpeed ? this.speed + value : this.maxSpeed;
  }

  decelerate(value) {
    this.speed = this.speed - value >= 0 ? this.speed - value : 0;
  }

  drive(hours) {
    this.distance =
      this.isOn === true ? this.distance + hours * this.speed : this.distance;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000