let todo_add = $(".todo_add");
let btn_add = $(".btn_add");

let btnground = $(".btnground");
let btndel = $(".btndel");
let btnedit = $(".btnedit");
let TodoList = $(".toDoList");

btn_add.addEventListener("click", function () {
  let inputvalue = todo_add.val;
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
