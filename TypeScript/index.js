var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
function convertName1(name) {
    return name === null || name === void 0 ? void 0 : name.toUpperCase();
}
var res1 = convertName1("naveen");
console.log('res', res1);
// template literal
var userName = "My name";
// var result = "Welcome " + userName +" to my learning platform!" 
var res2 = "Welcome ".concat(userName, " to my learning platform!");
var para = "Lorem ipsum dolor sit amet consectetur, \nadipisicing elit. Dolorem inventore provident soluta, \nfacilis qui, impedit quam eos neque exercitationem eius\nvitae sit maiores asperiores, dolores sint. Expedita placeat architecto perferendis.";
// spread operator
var arr1 = [1, 2, 3];
var arr2 = __spreadArray(__spreadArray([], arr1, true), [4, 5, 6], false);
function car(model, rate) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    console.log(model);
    console.log(rate);
    console.log(args);
}
car('audi', '1cr', 500, 'blue');
// Arrow function vs Normal function
document.getElementById('btn').addEventListener('click', function () {
    console.log(_this); // arrow function always refer to the global window object
});
document.getElementById('btn').addEventListener('click', function () {
    console.log(this); // this will refer to the btn object.
});
