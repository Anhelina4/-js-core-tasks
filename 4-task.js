"use strict"

function sequence(start=0, step=1) {
    let number=start
  return function() { 
    let returnNumber = number
    number+=step
    start=number
    return returnNumber;
  };
}

function fmap(a, gen ){
  return  function(...args) { return a(gen(...args) )}
  }

//args - its array
  function add(...args) { 
    //console.log(args)
    let sum = 0;
    args.map((item)=>(sum+=item))
    return sum
    // console.log(sum)
}

function square(x) { return x * x; }

// var gen = sequence(1, 1);

// var squareGen = fmap(square, gen);

// console.log(squareGen()); // 1
// console.log(squareGen()); // 4
// console.log(squareGen()); // 9
// console.log(squareGen()); // 16

// Мы получаем новую функцию, которая вызвает add, и результат пропускает через функцию square
var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2