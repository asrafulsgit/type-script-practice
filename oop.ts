{
// normal class
class Person{
    name : string;
    profession : string;
    designation : string;

    constructor(name : string, profession : string, designation : string){
        this.name = name;
        this.profession =profession;
        this.designation = designation;
    }

}
const person = new Person('asraful','student','student')
const person1 = new Person('faisal','businessman','chairman')


// class using parameter property
class Student{
    
    constructor(public name :string, public roll : number, public category : string){}
}

const student = new Student('karim',150,'A')


// inheritence 

class Parent{
    father_name : string;
    father_age : number;
    mother_name : string;
    mother_age : number;
    
    constructor(father_name :string,father_age : number, mother_name : string,mother_age: number){
        this.father_name = father_name;
        this.father_age = father_age;
        this.mother_name = mother_name;
        this.mother_age = mother_age;
    }

    getParentDetails(){
        console.log(`this is my parent details : Father ${this.father_name}, Mother ${this.mother_name}`)
    }

}

class Children extends Parent{
    name : string;
    age : number;

    constructor(name : string,age : number,father_name : string,father_age : number, mother_name :string, mother_age : number){
        super(father_name,father_age,mother_name,mother_age)
        this.name = name;
        this.age = age;
    }
    getPersonalDetails(){
        console.log(`this is my details : Name ${this.name}`)
    }
}

const child = new Children('karim',20,'karib mia',60,'amena khatun',50)

// child.getParentDetails()


// type guard with oop

class Group{
    group_name : string
    constructor(group_name : string){
        this.group_name = group_name
    }
}

class Admin extends Group{
    admin_name : string;
    constructor(admin_name : string, group_name : string){
        super(group_name)
        this.admin_name = admin_name
    }
}

class Member extends Group{
    member_name : string
    constructor(member_name : string, group_name : string){
        super(group_name)
        this.member_name = member_name
    }
}

const admin = new Admin('admin','group')
const member = new Member('member','group')

const getGroupDetails =(details : Group) =>{
     if(details instanceof Admin){
        //now you can access details.admin_name and details.group_name
     }else if(details instanceof Member){
        //now you can access details.member_name and details.group_name
     }else{
         // you can access only details.group_name
     }
}

getGroupDetails(admin)






















}