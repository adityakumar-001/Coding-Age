// OOPS

class Shape {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    perimeter() {
        return this.length + this.breadth;
    }
}

class Rectangle extends Shape {

}

const shape1 = new Shape(43, 45);
shape1.perimeter()

// inheritance, abstraction, encapsulation, polymorphism

// inheritance
class GrandFather {
    grandfather() {
        console.log("Grandfather property")
    }
}

class Father extends GrandFather {
    father() {
        console.log("Father property")
    }
}

class Child extends Father {
    child() {
        console.log("Child property")
    }
}

const child1 = new Child()
child1.father()
child1.grandfather()

const father = new Father()
father.grandfather()





// Example of inheritance

class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    getDetails() {
        return `${this.name} and ${this.id}`;
    }

    work() {
        return `${this.id} is working general task`;
    }
}

class Developer extends Employee {
    constructor(name, id, programmingLanguage) {
        // write the super function always at top or before the this keyword
        // super sends the variable details to the inherited class
        super(name, id);
        this.programmingLanguage = programmingLanguage;
    }
}

class Management extends Employee {
    constructor(name, id, specialization) {
        super(name, id);
        this.specialization = specialization;
    }
}


const dev1 = new Developer("ayush", 1);
console.log(dev1.getDetails())