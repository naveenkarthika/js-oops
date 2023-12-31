// const circle = {
//     radius: 10,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function () {
//         console.log('draw');
        
//     }
// }

// circle.draw();

// /**
//  * Two way to create objects
//  * 1. factory function - return an object
//  * 2. constructor function - new key word along with the this
//  */

// // factory function

// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw new');            
//         }
//     }
// }

// const circle1 = createCircle(1);
// circle1.draw();


// // constructor function
// // Note: Constructor function name start with uppercase, we use new key word, it will create the empty object {} and no need to return the values it will automatically return the values.

// function Circle(radius) {
//     // console.log('this', this); // Points to Circle object
    
//     this.radius = radius;
//     this.draw = function() {
//         console.log('const draw');
//     }
// }

// const another = new Circle(1); // without using new key word, this will points global window object & return the function values.

// another.draw();


// // object literals
// let x = {};

// // Js internally change the above line into
// // let x = new Object();

// // Built-in constructor
// // 1. new String() - '', "", ``
// // 2. new Boolean() - true, false
// // 3. new Number() - 1, 2, 3 ...


// // Functions are Objects

// function Circle1(radius) {    
//     this.radius = radius;
//     this.draw = function() {
//         console.log('const 1 draw');
//     }

//     return this;
// }

// const anotherWay = Circle1.call({}, 1);
// anotherWay.draw();


// // Values vs Reference Type

// let x1=10;
// let y1=x1;
// x1 = 20;

// console.log('x1', x1);
// console.log('y1', y1);

// const obj = {
//     value: 10
// }
// const obj1 = obj;
// obj.value = 20;

// console.log('obj', obj);
// console.log('obj1', obj1);

// // value type
// var number = 10;
// function increase(number) {
//     number++
// }
// increase(number);
// console.log('number', number);


// // Reference type
// var numberObj = {
//     value: 10
// };

// function increaseObj(numberObj) {
//     numberObj.value++
// }

// increaseObj(numberObj);
// console.log('numberObj', numberObj);

// Adding & removing properties

// function Circle2(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('const draw');
//     }
// }

// const circle2 = new Circle2(1);

// console.log('circle2', circle2);


// circle2.location = { x: 1 };

// const propertyName = "location name";

// circle2[propertyName] = { y: 2 };

// delete circle2[propertyName];

// Enumerating properties

// for(let key in circle2) {
//     if(typeof circle2[key] != 'function') 
//         console.log(key, circle2[key]);
// }

// let keys = Object.keys(circle2);
// console.log('keys', keys);

// if('radius' in circle2) {
//     console.log('yes radius property present');
    
// }

// Encapsulation

// Hide the details & provide only essential functions & properties
// Closures - Function inside another function access their parent variables & methods 
// Contrast to we have scope closure determines what variables will be accessible to an inner function.

// function Circle(radius) {
//     this.radius = radius;

//     let defaultLocation = { x: 1 };

//     let computeOptimumLocation = function(number) {
//         return number
//     }

//     this.draw = function() {
//         let x, y; // this varible is local scope, when you execute this function this will be out of scope.
//         computeOptimumLocation(20);
//         console.log(defaultLocation)
//         console.log('draw', this.radius);
//     }
// }

// const circle = new Circle(1);

// Getter / Setter

function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 1, y: 2 };

    let computeOptimumLocation = function(number) {
        return number
    }

    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    this.draw = function() {
        let x, y; // this varible is local scope, when you execute this function this will be out of scope.
        computeOptimumLocation(20);
        console.log(defaultLocation)
        console.log('draw', this.radius);
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if(!value.x || !value.y) throw new Error('Invalid location')
            defaultLocation = value;
        }
    })
}

const circle = new Circle(1);


