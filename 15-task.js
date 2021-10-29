const shallowCopy = (param) => {
  let newObj = {};
  if (Object.prototype.toString.call(param) === "[object Date]") {
    newObj = new Date();
    newObj.setTime(param.getTime());
    return newObj;
  }

  return Object.assign({}, param);
};

var a = { x: 1, y: 2, z: [1, 2, 3] };
var b = shallowCopy(a); // b — это отдельный объект

b.x = 10;
console.log(a.x); // 1
console.log(b.x);
// Но a.z и b.z указывают на один и тот же массив:
b.z.push(4);
console.log(a.z); // [1, 2, 3, 4]

var c = new Date(2014, 1, 1);
var d = shallowCopy(c);
console.log(Object.prototype.toString.call(d));
d.setFullYear(2015);
console.log(c.getFullYear()); // 2014
