class Worker{
    constructor(name, surname, rate, days){
        this.name = name,
        this.surname = surname,
        this.rate = rate,
        this.days = days
    }
    getSalary(){
        return this.rate * this.days
    }
}

var worker1 = new Worker('Хью', 'Лори', 10, 31);
var worker2 = new Worker('Кристиан', 'Бейл', 20, 31);

console.log(worker1.name); //выведет 'Иван'
console.log(worker1.surname); //выведет 'Иванов'
console.log(worker1.rate); //выведет 10
console.log(worker1.days); //выведет 31
console.log(worker1.getSalary()); //выведет 310 - то есть 10*31

console.log(worker2.name); 
console.log(worker2.surname); 
console.log(worker2.rate); 
console.log(worker2.days); 
console.log(worker2.getSalary()); 