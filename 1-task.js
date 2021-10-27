

function sequence(start=0, step=1) {
    
    let number=start
    console.log(number+"hi")
  return function() { 
      
    let returnNumber = number
    number+=step
    start=number
    return returnNumber;
  };
}
var generator = sequence(10, 3);
var generator2 = sequence();
var generator3 = sequence(3, 3);
console.log( generator() ); // 10
console.log( generator() ); // 2
console.log( generator() ); // 3

// console.log( generator2() ); 
// console.log( generator2() ); 
// console.log( generator2() ); 

// console.log( generator3() ); 
// console.log( generator3() ); 
// console.log( generator3() ); 


