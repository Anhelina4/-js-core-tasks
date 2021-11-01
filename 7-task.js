

// const bind = (fn, context) => {
//     return (...args) => {
//         console.log(args);
//         console.log(fn);
//         console.log(context);
//         return fn.apply(context, [...args]);
//     }
// }

// const ctx = { x : 2};

// const testThis = function (a) {
//    console.log("x=" + this.x + ", a=" + a);
// }

// const boundFunction = bind(testThis, ctx);

// boundFunction(100);
const bind = (fn, context)=>{
    return (...args)=> fn.apply(context, [...args])
}

const ctx = {x:2}
const testThis = function(a){
    console.log("x=" + this.x + ", a=" + a);
}
 const myfunc = bind(testThis, ctx);
  myfunc(200)
