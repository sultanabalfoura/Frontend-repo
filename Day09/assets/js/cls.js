class Animal {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(`Animal name ${this.name}`);
    }
}
class Rabit extends Animal {
    constructor(name, speed) {
        super(name);
        this.speed = speed;
    }
    print() {
        console.log(`Animal name ${this.name} animal speed ${this.speed}`);
    }
}
let rabit = new Rabit("booka2" , 40);
rabit.print();

// let rabit = new Rabit("booka", 30);
// rabit.run();
