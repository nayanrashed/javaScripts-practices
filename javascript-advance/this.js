class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}
const kodom = new Person('Kodom Ali', 21)
console.log(kodom);
console.log(kodom.age);
kodom.sleep();
const bodon = new Person('Bodon Ali', 23)
bodon.sleep();