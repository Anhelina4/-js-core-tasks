function* merge(first, second) {
    console.log(first, second)
  var j = 0;
  for (var i = 0; i < first.length; i++) {
    yield(first[i] === undefined) ? second[j++]: first[i];
    // console.log(second[j++])
    // console.log(first[i])
  }
  for (; j < second.length; j++) {
    yield second[j];
  }
}

function partialAny(fn, ...boundedArgs) {
    console.log(boundedArgs)
  return (...args) => fn(...merge(boundedArgs, args));
}

function test(a, b, c) {
  return 'a=' + a + ',b=' + b + ',c=' + c;
}
var test1_3 = partialAny(test, 1, undefined, 3);
console.log(test1_3(5)); // a=1,b=5,c=3