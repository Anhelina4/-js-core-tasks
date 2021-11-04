class MyString {
  reverse(str) {
    return str.split("").reverse().join("");
  }
  ucFirst(str) {
    let newStr;
    return (newStr = str[0].toUpperCase() + str.slice(1));
  }
  ucWords(str) {
    let strArr = str.split(" ");
    let arr2 = strArr.map((item) => {
      return item[0].toUpperCase() + item.slice(1);
    });
    return arr2.join(" ");
  }
}

var str = new MyString();

console.log(str.reverse("abcde")); //выведет 'edcba'
console.log(str.ucFirst("abcde")); //выведет 'Abcde'
console.log(str.ucWords("abcde abcde abcde")); //выведет 'Abcde Abcde Abcde'
