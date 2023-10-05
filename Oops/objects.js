const circle = {
    radius: 10,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw');
        
    }
}

circle.draw();

/**
 * Two way to create objects
 * 1. factory function - return an object
 * 2. constructor function - new key word along with the this
 */

// factory function

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw new');            
        }
    }
}

const circle1 = createCircle(1);
circle1.draw();


// constructor function
// Note: Constructor function name start with uppercase, we use new key word, it will create the empty object {} and no need to return the values it will automatically return the values.

function Circle(radius) {
    // console.log('this', this); // Points to Circle object
    
    this.radius = radius;
    this.draw = function() {
        console.log('const draw');
    }
}

const another = new Circle(1); // without using new key word, this will points global window object & return the function values.

another.draw()

