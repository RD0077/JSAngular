
enum gender{
    male="MALE",
    female="FEMALE"
}
class Person{
    name:string
    age:number
    gender:string

    constructor(name:string,age:number,gender:gender){
        this.name=name
        this.age=age
        this.gender=gender
    }
    getPerson(){
        console.log("Person's details are:"+this.name+","+this.age+","+this.gender)
    }
}

let personObj=new Person("John Wick",45,gender.male);
personObj.getPerson();