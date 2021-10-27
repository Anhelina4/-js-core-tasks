function sequence(start=0, step=1) {
    let number=start
  return function() { 
    let returnNumber = number
    number+=step
    return returnNumber;
  };
}
var generator = sequence(10, 3);
var generator2 = sequence();
console.log( generator() ); // 10
console.log( generator() ); // 2
console.log( generator() ); // 3

console.log( generator2() ); 
console.log( generator2() ); 
console.log( generator2() ); 

// var generator = sequence(10, 3);
// var generator2 = sequence(7, 1);

// console.log(generator()); // 10
// console.log(generator()); // 13
// console.log(generator2()); // 7

// console.log(generator()); // 16

// console.log(generator2()); // 8
