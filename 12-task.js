class Hamburger {
  size;
  stuffing;
  toppingArr = [];
  trimedArr;
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
  }
  addTopping(topping) {
    this.toppingArr.push(topping);
    for (var i = this.toppingArr.length - 1; i > 0; i--) {
      if (
        this.toppingArr[i] !== this.toppingArr[i--] &&
        this.toppingArr[i] !== undefined &&
        this.toppingArr[i] !== null
      ) {
        this.toppingArr.push(this.toppingArr[i]);
      }
      return this.toppingArr;
    }
  }
  calculateCalories() {
    return this.toppingArr.map((item) => {
      return item.energy;
    });
  }
  calculatePrice() {
    let arr = [];
    let sum = 0;
    arr.push(this.size, this.stuffing);
    for (var i = 0; i < this.toppingArr.length; i++) {
      arr.push(this.toppingArr[i]);
    }
    console.log(arr);
    let arr2 = arr.map((item) => {
      return Object.values(item);
    });
    console.log(arr2);
    let arr3 = arr2.map((item) => {
      return item[0];
    });
    console.log(arr3);
    for (var i = 0; i < arr3.length; i++) {
      sum += arr3[i];
      // console.log(sum)
    }
    return sum;
  }
  getSize() {
    let sizeCost = Object.values(this.size)[0];
    if (sizeCost == 50) {
      console.log("it`s small");
    } else {
      console.log("it`s big");
    }
  }
  removeTopping(top) {
    console.log(top);
    console.log(this.toppingArr);
    this.toppingArr.push(top);
    console.log(this.toppingArr);
    for (var i = 0; i < this.toppingArr.length; i++) {
      if (this.toppingArr[i] === top) {
        delete this.toppingArr[i];
      }
    }
    this.trimmedArr = this.toppingArr.filter(Boolean);
    return this.trimmedArr;
  }
  getTopping() {
    return this.trimmedArr;
  }
}
(Hamburger.SIZE_SMALL = { price: 50, energy: "20 каллорий" }),
  (Hamburger.SIZE_LARGE = { price: 100, energy: "40 каллорий" }),
  (Hamburger.STUFFING_CHEESE = { price: 10, energy: "20 каллорий" }),
  (Hamburger.STUFFING_SALAD = { price: 20, energy: "5 каллорий" }),
  (Hamburger.STUFFING_POTATO = { price: 15, energy: "10 каллорий" }),
  (Hamburger.TOPPING_MAYO = { price: 20, energy: "5каллорий" }),
  (Hamburger.TOPPING_SPICE = { price: 15, energy: "0 каллорий" });

    var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// спросим сколько там калорий
console.log("Calories: %f", hamburger.calculateCalories());
// сколько стоит
console.log("Price: %f", hamburger.calculatePrice());
// console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
hamburger.getSize();
// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
hamburger.removeTopping(Hamburger.TOPPING_MAYO);
console.log("Have %d toppings", hamburger.getTopping().length); // 1
