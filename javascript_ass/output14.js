class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super(name); // Call the parent class constructor if its a child class
      /*  this.name = name; */ //error
        this.created = Date.now();
    }
}

const rabbit = new Rabbit("White Rabbit")
console.log(rabbit.name);