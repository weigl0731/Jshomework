let todo_add = document.querySelector(".todo_add");
let btn_add = document.querySelector(".btn_add");

let btnground = document.querySelector(".btnground");
let btndel = document.querySelector("btndel");
let btnedit = document.querySelector("btnedit");
let TodoList = document.querySelector("toDOList");

btn_add.addEventListener("click", function () {
  let inputvalue = todo_add.value;
  addItem(inputvalue);
});

function addItem() {
  let newItem = document.createElement("li");
  newItem.innerHTML = `<input type="" / >
  <input class="btndel" type="button" value="del" />
  <input class="btnedit" type="button" value="edit" />`;
  TodoList.appendChild(newItem);
}
