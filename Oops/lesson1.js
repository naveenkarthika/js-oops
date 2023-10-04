// Procedural programming

var baseSalary = 30000;
var overTime = 10;
var rate = 20;

function getWage(baseSalary, overTime, rate) {
    return baseSalary + (overTime * rate);
}

console.log(getWage(baseSalary, overTime, rate));


// Object-orientated programming

// The best functions are those with no parameters

const employee = {
    baseSalary: 30000,
    overTime: 10,
    rate : 20,
    getWage: function () {
        return this.baseSalary + (this.overTime * this.rate)
    }
}


console.log('oops',employee.getWage());


