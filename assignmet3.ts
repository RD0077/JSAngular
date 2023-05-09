

class Person1{
    name:string
    dob:Date
    gender:string

    constructor(name:string,dob:Date,gender:string){
        this.name=name
        this.dob=dob
        this.gender=gender
    }
    getAge(){
        var age=0
            var timeDiff = Math.abs(Date.now() - this.dob.getTime());
            //Used Math.floor instead of Math.ceil
            //so 26 years and 140 days would be considered as 26, not 27.
            age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
        console.log("Person's details are:"+this.name+" DOB:"+this.dob +", age:"+age+","+this.gender)
    }
}
let personObj1=new Person1("John Wick",new Date("2000-05-16") ,"male");
let personObj2=new Person1("Jack Sparrow",new Date("1998-01-16") ,"male");
let personObj3=new Person1("Iron Man",new Date("1988-01-16") ,"male");
let personObj4=new Person1("Barbosa",new Date("1976-01-16") ,"male");
var personArray:Person1[]=[personObj1,personObj2,personObj3,personObj4]
for(var PersonIndex of personArray){
    PersonIndex.getAge()
}
