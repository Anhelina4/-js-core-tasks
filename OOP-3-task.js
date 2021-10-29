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
  setRate(arg) {
    return (this.#RATE = arg);
  }
  getDays() {
    return this.#DAYS;
  }
  setDays(arg) {
    return (this.#DAYS = arg);
  }
  getSalary() {
    return this.#RATE * this.#DAYS;
  }
}

var worker = new Worker("Иван", "Иванов", 10, 31);

console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10
