function pluck(arr, key){
    return arr.map(item=>
      {
        return item[key]
      })
}

var characters = [
  { 'name': 'barney', 'age': 36 },
  { 'name': 'fred', 'age': 40 }
];

console.log(pluck(characters, 'name')); // ['barney', 'fred']