"use strict";
// typescript is a superset of javascript that adds static typing.
// in ts has 3 types of type is commonly use => number, string, boolean 
// special types like => any,never,unknown,undefind, null
// ts has 2 way to set type => Explicit and Implicit
// Explicit => write type with variable, object and arrays
const exp = 25;
// Implicit => it has automatically infer type defend on values.
const imp = 25;
// you can see diferent types of variable diclaration 
const num = 20;
const str = 'asraful';
const bol = true;
const obj = {
    name: 'asraful',
    age: 23,
    isStudent: false
};
// in those arrays you can't push other type of value except declare type 
const strArry = ['asraful', 'karim', 'rahim'];
const numArry = [10, 20, 25];
const boolArry = [true, false];
// ts tuples 
// tuples is a defind of typed array for index
const tup = [10, 'hello', true];
// ts enums
// an enums is a group of constants
// by default it initialize with 0 and add 1 to each additional value
var vars;
(function (vars) {
    vars[vars["name"] = 0] = "name";
    vars[vars["age"] = 1] = "age";
    vars[vars["roll"] = 2] = "roll"; // 2
})(vars || (vars = {}));
var enumera;
(function (enumera) {
    enumera[enumera["name"] = 0] = "name";
    enumera[enumera["age"] = 25] = "age";
    enumera[enumera["roll"] = 26] = "roll"; // 26
})(enumera || (enumera = {}));
var enumeras;
(function (enumeras) {
    enumeras["name"] = "asraful";
    enumeras[enumeras["age"] = 25] = "age";
    enumeras[enumeras["roll"] = 102432] = "roll"; // 102432
})(enumeras || (enumeras = {}));
const sName = 'asraful';
const Sage = 24;
const student = {
    name: 'asraful',
    age: 25,
    isStudent: true
};
let currentStatus = "success";
const car = {
    name: 'toyota',
    color: 'blue'
};
const userInfo = {
    name: 'asraful',
    userId: 'asrf1425',
    phone: 8801820,
    house: 'karim house',
    state: 'feni',
};
// union type => string | number 
// it can except more than a single type 
const union = 'false';
// ts functions 
// syntax 
/* function functionName (parameter : parameterType): returnType {
     #expresions
}*/
function fName(name) {
    return name;
}
// console.log(fName('asraful'))
// if function does not return value
function fnotReturn(roll) {
    console.log(roll);
}
// optional parameter
function addition(a, b, c) {
    console.log(c);
    return a + b + (c || 0);
}
// console.log(addition(10,20))
// default parameter
function substraction(a, b, c = 0) {
    console.log(c);
    return a - b - c;
}
// console.log(substraction(10,20))
// ts casting
let value = "Asraful";
let cName = value;
const hello = {
    name: 'asraful',
    func() {
        const funct = () => {
            console.log("Arrow:", this.name);
        };
        funct();
    }
};
hello.func();
// ts Generic
