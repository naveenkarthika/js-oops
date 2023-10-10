var Car = /** @class */ (function () {
    function Car(carName, carColor) {
        this.name = carName;
        this.color = carColor;
    }
    Car.prototype.start = function () {
        console.log("".concat(this.name, " Started"));
    };
    Car.prototype.move = function (direction) {
        console.log("".concat(this.name, " Car moving ").concat(direction));
    };
    Car.prototype.stop = function () {
        console.log("".concat(this.name, " Stopped"));
    };
    return Car;
}());
var car = new Car('BMW', 'Black');
car.start();
car.move('LEFT');
car.stop();
