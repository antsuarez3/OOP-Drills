// OBJECTIVE 1 //
let person1 = {
    name: 'James',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

let person2 = {
    name: 'Jacob',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

person3 = {
    name: 'Tina',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

let person4 = {
    name: 'Jacinda',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

person5 = {
    name: 'Bill',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();
// End of OBJECTIVE 1 //

// OBJECTIVE 2 //
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
Person.prototype.sayHello = function () {
    console.log(`Hey! My name is ${this.name}, I am ${this.age} years old and live in ${this.city}.`);
}

let p1 = new Person('Thomas', 31, 'Atlanta');
let p2 = new Person('Terry', 29, 'Boston');
let p3 = new Person('Cindy', 20, 'Charlotte');
let p4 = new Person('Mason', 50, 'Miami');
let p5 = new Person('Baxter', 26, 'New Orleans');

p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();
// End of OBJECTIVE 2 //

class Vehicle {
    constructor(manufacturer, wheels) {
        this.manufacturer = manufacturer;
        this.wheels = wheels;
    }
    aboutVehicles() {
        console.log(`This is a vehicle made by ${this.manufacturer} and has ${this.wheels} wheels!`)
    }
}

class Trucks extends Vehicle {
    constructor(manufacturer, wheels, doors, bed) {
        super(manufacturer, wheels);
        this.doors = doors;
        this.bed = bed;
    }
    
    
    aboutVehicles() {
        if (this.bed === true){
        console.log(`This is a truck made by ${this.manufacturer} and has ${this.wheels} wheels and ${this.doors} doors with a bed!`)
        } else {
            console.log(`This is a truck made by ${this.manufacturer} and has ${this.wheels} wheels and ${this.doors} doors without a bed!`)
        }
    }

}

class Sedans extends Vehicle {
    constructor(manufacturer, wheels, size, mpg) {
        super(manufacturer, wheels);
        this.size = size;
        this.mpg = mpg;
    }

    aboutVehicles() {
        console.log(`This is a ${this.size} size sedan made by ${this.manufacturer} and has ${this.wheels} wheel and gets ${this.mpg} mpg!`)
    }
}

class Motorcyles extends Vehicle {
    constructor(manufacturer, wheels, handlebars, doors) {
        super(manufacturer, wheels);
        this.handlebars = handlebars;
        this.doors = doors;
    }

    aboutVehicles() {
        console.log(`This is a motorcycle made by ${this.manufacturer} and has ${this.wheels} wheel and has ${this.handlebars} and has ${this.doors} doors!`)
    }
}

let truck1 = new Trucks('Chevrolet', 4, 2, true);
let sedan1 = new Sedans('Honda', 4, 'medium', 27);
let motorcycles1 = new Motorcyles('Kawasaki', 2, 'handlebars', 'no');

console.log(truck1);
console.log(sedan1);
console.log(motorcycles1);

truck1.aboutVehicles();
sedan1.aboutVehicles();
motorcycles1.aboutVehicles();






