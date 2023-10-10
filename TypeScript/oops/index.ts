
// define own type
type CarDirection = 'LEFT' | 'RIGHT' | 'FORWARD' | 'BACK';

interface CarObject {
    carName: string,
    carColor: string,
    carBrand?: string // optional parameter
}

interface LocationObject {
    location: string,
    dateTime: Date,
    coords: {
        lat: number,
        lng: number
    }
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
    // Array<Object> - empty array || array inside n no.of objects
    // [{}] - Must only one array of Object
    goToLocation(location: Array<LocationObject>) {
        location.map(e => {
            console.log(e.coords.lat);
        })
    }
}


const car = new Car({
    carName: 'BMW',
    carColor: 'Black'
});

car.start()
car.move('LEFT')
car.stop()
car.goToLocation([{
    location: 'Chennai',
    dateTime: new Date(),
    coords: {
        lat: 12.33,
        lng: 34.23
    }
}])