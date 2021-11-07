function map(fn, array){
    var arr2=array.map(item=>{
        return fn(item)
    })
    return arr2
}


function square(x) { return x * x; } 

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []