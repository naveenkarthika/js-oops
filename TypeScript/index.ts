function convertName1(name: string) {
    return name?.toUpperCase()
}

const res1 = convertName1("naveen")

console.log('res', res1);

// template literal
var userName = "My name";

// var result = "Welcome " + userName +" to my learning platform!" 
let res2 = `Welcome ${userName} to my learning platform!`;
let para = `Lorem ipsum dolor sit amet consectetur, 
adipisicing elit. Dolorem inventore provident soluta, 
facilis qui, impedit quam eos neque exercitationem eius
vitae sit maiores asperiores, dolores sint. Expedita placeat architecto perferendis.`

// spread operator

let arr1 = [1,2,3];

let arr2=[...arr1, 4,5,6];

function car(model, rate, ...args) {
    console.log(model);
    console.log(rate);
    console.log(args);
    
}


car('audi', '1cr', 500, 'blue');

// Arrow function vs Normal function

document.getElementById('btn').addEventListener('click',() => {
    console.log(this) // arrow function always refer to the global window object
})

document.getElementById('btn').addEventListener('click',function() {
    console.log(this); // this will refer to the btn object.
})
