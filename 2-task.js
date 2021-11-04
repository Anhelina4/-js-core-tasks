function sequence(start=0, step=1) {
    let number=start
  return function() { 
    let returnNumber = number
    number+=step
    return returnNumber;
  };
}

function take(gen, x){
    let arr = []
    for(var step=0; step < x; step++){
        arr.push( gen())
    }
    return arr
}
var gen2 = sequence(0, 2);
// console.log(gen2())
// console.log(gen2())
// console.log(gen2())

console.log(take(gen2, 5)); 

