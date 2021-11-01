function createTable() {
  let body = document.body;
  let table = document.createElement("table");
  table.style.margin = "12px";
  table.style.border = "1px solid green";
  for (let i = 0; i < 3; i++) {
    let row = table.insertRow();
    row.className = "row";
    for (let j = 0; j < 3; j++) {
      let col = row.insertCell();
      col.className = "col";
      col.style.border = "1px solid black";
      col.style.width = "28px";
      col.style.height = "28px";
      col.style.background = "white";
    }
  }
  let btn = document.createElement("button");
  btn.className = "btn";
  btn.style.margin = "10px";
  btn.innerHTML = "Change colours!";
  body.appendChild(table);
  body.appendChild(btn);

  let items = document.querySelectorAll(".col");
  console.log(items);
  items.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.style.background === "white") {
        item.style.background = "black";
      } else {
        item.style.background = "white";
      }
    });
  });

  btn.addEventListener("click", () => {
    items.forEach((item) => {
      if (item.style.background === "black") {
        item.style.background = "white";
      } else {
        item.style.background = "black";
      }
    });
  });
}
export default createTable
// createTable();
