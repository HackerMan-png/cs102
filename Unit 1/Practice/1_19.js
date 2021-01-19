// class staff{
//     constructor(name, id, age){
//         this.name = name;
//         this.id = id;
//         this.age = age
//     }
// }

// class admin extends staff{
//     set privilege(access){
//         this.privilege = access
//     }
// }

// class intern extends staff{
//     set leaveDate(date){
//         this.leaveDate = date
//     }
// }

// let jimmy = new admin("Jimmy", 1224, 24)
// jimmy.access = true
// console.log(jimmy);


class Animal{
    constructor(name){
        this.speed = 0
        this.name = name
    }
    run(speed){
        this.speed = speed
        console.log(`${this.name} runs with a speed of ${this.speed}`);
    }
    stop(){
        this.speed = 0;
        console.log(`${this.name} is standing still`);
        
    }
}

class Rabbit extends Animal{
    hide(){
        console.log(`${this.name} is hiding`);
    }
    stop(){
        // this will be used for Rabbit.stop()
        // to fix this
        super.stop() //call the parent stop
        this.hide() // then ithides
    }
}

let rabbit = new Rabbit("Peter");
rabbit.run(10)
rabbit.stop()