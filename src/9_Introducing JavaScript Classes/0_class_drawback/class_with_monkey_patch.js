class ClassCar {
    drive () {
        console.log('Vroom!');
    }
}

ClassCar.prototype.beep = ()=>console.log('beep');
const car1 = new ClassCar();//if without `new`, it will throw an error.
console.log(car1.drive());
car1.beep();

