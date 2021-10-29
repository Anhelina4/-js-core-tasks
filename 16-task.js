function deepCopy(obj){
    let newObj = {};
    if(Object.prototype.toString.call(obj) === "[object Date]"){
        let dateObj = new Date();
        dateObj.setTime(obj.getTime())
        return dateObj
    }
    for(const i in obj) {
        if (obj[i] instanceof Object) {
            newObj[i] = deepCopy(obj[i]);
          continue;
        }
        newObj[i] = obj[i];
      }
      return newObj;
}

var a = { x: 1, y: 2, z: [1, 2, 3], w: new Date(2014, 1, 1, 12, 0, 0) };
var b = deepCopy(a); // b — это отдельный объект
b.x = 10;
console.log(a.x); // 1
console.log(a)
console.log(b)
// a.z и b.z указывают на разные массивы: 
b.z[3]="4";
console.log(a.z); // [1, 2, 3]
console.log(b.z)
// a.w и b.w независимы друг от друга
b.w.setFullYear(2015);
console.log(a.w.getFullYear()); // 2014
