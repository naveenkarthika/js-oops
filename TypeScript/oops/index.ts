
// define own type
type CarDirection = 'LEFT' | 'RIGHT' | 'FORWARD' | 'BACK';


class Car {
    name: string;
    color: string;

    constructor(carName: string, carColor: string) {
        this.name = carName;
        this.color = carColor;
    }

    start(){
        console.log(`${this.name} Started`);
    }

    move(direction:CarDirection){
        console.log(`${this.name} Car moving ${direction}`);
    }

    stop(){
        console.log(`${this.name} Stopped`);
    }
}


const car = new Car('BMW', 'Black');

car.start()
car.move('LEFT')
car.stop()