
// ts Generic
{
    type Generic<T> = Array<T>;

    // const name : string[] = ['x','y','z'];  //normal use
    const name : Generic<string> = ['x','y','z'];  //generic use
    // const age : number[] = [15,20,25]; // normal use
    const age : Generic<number> = [15,20,25]; // generic use

    // const allData = [1502,{name : 'karim', isGood : false},'student'] // nomal use
    type AllGeneric<X,Y,Z> = [X,Y,Z]
    const allData: AllGeneric<number,{name : string, isGood : boolean},string> = [1502,{name : 'karim', isGood : false},'student'] // generic use

    const obj2: Generic<{name : string,roll : number}> = [
        {
            name : 'x',
            roll : 50
        },
        {
            name : 'Y',
            roll : 60
        }
    ]



    // advenced uses of Generic

    type Advanced<T,M=null> = {
        name : string;
        roll : number;
        address : T,
        isRich?: M
    }


    interface Address {
        village : string;
        road : number,
        isAvailabe : boolean
    }
    const student1 : Advanced<Address> ={
        name : 'Asraful',
        roll : 753526,
        address :{
            village : 'char haqdi',
            road : 5,
            isAvailabe : false
        }
    }

    interface Address2 {
            village : string;
            road : number;
            isAvailabe : boolean
    }

    const student2 : Advanced<Address2,boolean> ={
        name : 'Farhan',
        roll : 752563,
        address : {
            village : "i don't know",
            road : 10,
            isAvailabe : true
        },
        isRich : true
    }

// function with generic

type FuncGeneric =<T>(info : T) => T;

interface StudentInfo {
    name : string;
    roll : number
}


const faglaGeneric =<StudentInfo>(info : StudentInfo) : StudentInfo =>{
    return info
} 

const studentInfoResult = faglaGeneric<StudentInfo>({name : 'x',roll : 520})



// ts with Promise 
interface FakeData {
    id : number;
    userId : number;
    title : string;
    completed : boolean
}
const tsWithPromise = async() : Promise<FakeData>=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json();
    return data
}
tsWithPromise()



// type guard 

type guarding = string | number;
const typeCheck = (para1 : guarding, para2 :guarding) : guarding =>{

    if(typeof para1 === 'number' && typeof para2 === 'number'){
        return para1 + para2
    }else{
        return para1.toString() + para2.toString()
    }

}

// console.log(typeCheck(10,5))


// type in 


interface User {
    name : string,
}

interface Admin{
    name : string;
    role : 'Admin';
}

const checkVisitor = (visitor : User | Admin)=>{
    if('role' in visitor){
        // you can access visitor.role and visitor.name
    }else{
        // you can access only visitor.name
    }
}














}
