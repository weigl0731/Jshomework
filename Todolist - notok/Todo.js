let todo_add = document.querySelector(".todo_add");
let btn_add = document.querySelector(".btn_add");

let btnground = document.querySelector(".btnground");
let btndel = document.querySelector(".btndel");
let btnedit = document.querySelector(".btnedit");
let TodoList = document.querySelector(".toDoList");

btn_add.addEventListener("click", function () {
  let inputvalue = todo_add.value;
  addItem(inputvalue);
  // console.log(inputvalue);
});

let count = 0;

function addItem(x) {
  let newItem = document.createElement("li");
  newItem.id = `item-${count}`;
  count++;
  // newItem.addClass = btnground;

  newItem.innerHTML = `<input type="" value = "${x}" />
  <input class="btndel" type="button" value="del" />
  <input class="btnedit" type="button" value="edit" />`;
  TodoList.append(newItem);
}

function delItem(a) {
  let delitem = document.querySelector();
}
