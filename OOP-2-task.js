class Worker {
  #name = "Anhelina";
  #surname;
  #RATE;
  #DAYS;
  constructor(name, surname, rate, days) {
    this.#name = name;
    this.#surname = surname;
    this.#RATE = rate;
    this.#DAYS = days;
  }
  getName() {
    return this.#name;
  }
  getSurname() {
    return this.#surname;
  }
  getRate() {
    return this.#RATE;
  }
  getDays() {
    return this.#DAYS;
  }
  getSalary() {
    return this.#RATE * this.#DAYS;
  }
}

var worker = new Worker("Иван", "Иванов", 10, 31);

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
console.log(worker.name);
worker.name = "Berk";
console.log(worker.getName());
