// class Car {
//     startCar(){
//         console.log(`${this.brand} Car started`);
//     }
//     stopCar(){
//         console.log(`${this.brand} Car stopped`);
//     }
// }

// let mycar = new Car();
// mycar.startCar();
// mycar.stopCar();

// let mycar2 = new Car();
// mycar2.brand= "Toyoto";
// mycar2.startCar();
// mycar2.stopCar();

// let mycar3 = new Car();
// mycar3.brand = "KIA";
// mycar3.startCar();
// mycar3.stopCar();

// ..........Constructor...........................


class Car {
    constructor(brand) {
        this.brand = brand;
    }
    startCar() {
        console.log(`${this.brand} Car started`);
    }
    stopCar() {
        console.log(`${this.brand} Car stopped`);
    }
}

let mycar = new Car("Toyota");
mycar.startCar();
mycar.stopCar();

let mycar2 = new Car("Kia");
mycar2.startCar();
mycar2.stopCar();

let mycar3 = new Car("BMW");
mycar3.startCar();
mycar3.stopCar();