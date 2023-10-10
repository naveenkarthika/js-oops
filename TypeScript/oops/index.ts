
// define own type
type CarDirection = 'LEFT' | 'RIGHT' | 'FORWARD' | 'BACK';

interface CarObject {
    carName: string,
    carColor: string,
    carBrand?: string // optional parameter
}

class Car {
    name: string;
    color: string;

    constructor(config: CarObject) {
        this.name = config.carName;
        this.color = config.carColor;
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


const car = new Car({
    carName: 'BMW',
    carColor: 'Black'
});

car.start()
car.move('LEFT')
car.stop()