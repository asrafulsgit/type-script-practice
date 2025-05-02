"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// ts Generic
{
    // const name : string[] = ['x','y','z'];  //normal use
    const name = ['x', 'y', 'z']; //generic use
    // const age : number[] = [15,20,25]; // normal use
    const age = [15, 20, 25]; // generic use
    const allData = [1502, { name: 'karim', isGood: false }, 'student']; // generic use
    const obj2 = [
        {
            name: 'x',
            roll: 50
        },
        {
            name: 'Y',
            roll: 60
        }
    ];
    const student1 = {
        name: 'Asraful',
        roll: 753526,
        address: {
            village: 'char haqdi',
            road: 5,
            isAvailabe: false
        }
    };
    const student2 = {
        name: 'Farhan',
        roll: 752563,
        address: {
            village: "i don't know",
            road: 10,
            isAvailabe: true
        },
        isRich: true
    };
    const faglaGeneric = (info) => {
        return info;
    };
    const studentInfoResult = faglaGeneric({ name: 'x', roll: 520 });
    const tsWithPromise = () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = yield res.json();
        return data;
    });
    tsWithPromise();
}
