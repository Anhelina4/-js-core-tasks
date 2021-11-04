// вспомогательная функция для создания ноды
function createNode(name, klasses) {
  var n = document.createElement(name);
  n.className = klasses;
  document.body.appendChild(n);
  return n;
}
function l(x) {
  // console.log(x);
}
//...args = массив с тем, что мы внизу передали в createNode
function hasClass(...args) {
  let arrClasses = [];
  let arrTag = [];
  let newArrTag = [];
  let arr = [];
  let result = [];
  for (let i = 0; i < [...args].length; i++) {
    arr.push([...args][i]);
  }
  //обрезаем масивы, чистим от лишних символов, разбиваем на строки и создаем массив строк
  arrTag = arr[0].outerHTML.replace(/[(<,.""''``=>/)]/g, " ").split(" ");
  for (var i in arrTag) {
    if (arrTag[i] !== "" && arrTag[i] !== "") {
      newArrTag.push(arrTag[i]);
    }
  }
  arrClasses = arr[1].split(" ");
  //цикл для сравнения массивов(есть ли переданный класс в теге)
  for (var i in arrTag) {
    for (var j in arrClasses) {
      if (arrTag[i] === arrClasses[j]) result.push(arrClasses[j]);
    }
  }
  if (result.length == 0) {
    console.log(false);
  } else {
    console.log(true);
  }
}

function addClass(node, klass) {
  node.className = node.className + " " + klass;
  console.log(node);
}

function removeClass(node, klass) {
  let nodeClassNames = node.outerHTML
    .replace(/[(<,.""''``=>/)]/g, " ")
    .split(" ");
  let newNodeClassNames = [];

  console.log(nodeClassNames);
  for (var i = 2; i < nodeClassNames.length - 2; i++) {
    if (
      nodeClassNames[i] !== "" &&
      nodeClassNames[i] !== "" &&
      nodeClassNames[i] !== klass &&
      nodeClassNames[i] !== "class"
    ) {
      newNodeClassNames.push(nodeClassNames[i]);
      console.log(newNodeClassNames);
    }
  }
  let result = newNodeClassNames.join(",").replace(",", " ");
  console.log(result);
  node.className = result;
}

l(hasClass(createNode("div", "test1"), "test test1")); // true
l(hasClass(createNode("div", "test"), "tes")); // false

l(hasClass(createNode("div", "test1 test2"), "tes")); // false
l(hasClass(createNode("div", "test1 test2"), "test1")); // true

let btn = createNode("button", "test1 test2");
console.log(btn);
l(addClass(btn, "testAddClass"));
l(removeClass(btn, "testAddClass"));
