// typescript is a superset of javascript that adds static typing.

// in ts has 3 types of type is commonly use => number, string, boolean 
// special types like => any,never,unknown,undefind, null


// ts has 2 way to set type => Explicit and Implicit
// Explicit => write type with variable, object and arrays
const exp : number = 25;
// Implicit => it has automatically infer type defend on values.
const imp = 25;


// you can see diferent types of variable diclaration 
const num : number = 20;
const str : string = 'asraful'
const bol : boolean = true;

const obj : { name : string , age : number, isStudent : boolean} ={
     name : 'asraful',
     age : 23,
     isStudent : false
}

// in those arrays you can't push other type of value except declare type 
const strArry : string[] = ['asraful','karim','rahim']
const numArry : number[] = [10,20,25]
const boolArry : boolean[]= [true,false]

// ts tuples 
// tuples is a defind of typed array for index
const tup : [number,string,boolean]= [10,'hello',true]


// ts enums
// an enums is a group of constants
// by default it initialize with 0 and add 1 to each additional value
enum vars {
     name,  // 0
     age,   // 1   
     roll   // 2
}
enum enumera {
     name,  // 0
     age  = 25,   // 25   
     roll   // 26
}

enum enumeras {
     name = 'asraful',  // asraful
     age  = 25,   // 25   
     roll =  102432 // 102432
}

// ts Aliases
//A type alias is a way to give a custom name to a type

// for variables
type Name = string;
const sName : Name = 'asraful'
type Age = number;
const Sage  : Age = 24;

// for objects
type Student = {
     name : string,
     age : number,
     isStudent : boolean
}
const student : Student = {
     name : 'asraful',
     age : 25,
     isStudent : true
}
// union type Alias
type Status = "success" | "error" | "loading";
let currentStatus: Status = "success";


// ts Interface
// Interfaces are similar to type aliases, except they only apply to object types.

interface Car  {
     name : string,
     color : string,
}
const car : Car = {
     name : 'toyota',
     color : 'blue'
}

interface user {
     name : string,
     userId : string,
     phone : number
}

// it can extends another interface like inheritence 
interface UserInfo extends user{
     house : string,
     state : string,
     isBangladeshi? : boolean
}

const userInfo : UserInfo = {
     name : 'asraful',
     userId : 'asrf1425',
     phone : 8801820,
     house : 'karim house',
     state : 'feni',
}

// union type => string | number 
// it can except more than a single type 

const union : string | number = 'false'

// ts functions 
// syntax 

/* function functionName (parameter : parameterType): returnType {
     #expresions
}*/

function fName (name : string) : string {
     return name;
}
// console.log(fName('asraful'))

// if function does not return value
function fnotReturn(roll:number) : void {
     console.log(roll)
}

// optional parameter
function addition(a: number, b: number, c?: number) : number {
     console.log(c)
     return a + b + (c || 0);
}
// console.log(addition(10,20))

// default parameter
function substraction(a: number, b: number, c: number = 0) : number {
     console.log(c)
     return a - b - c ;
}
// console.log(substraction(10,20))


// ts casting
let value: unknown = "Asraful";
let cName = value as string;

const hello ={
     name : 'asraful',
     func(){
         const  funct = ()=>{
             console.log("Arrow:", this.name); 
          }
          funct()
     }
 } 

hello.func()