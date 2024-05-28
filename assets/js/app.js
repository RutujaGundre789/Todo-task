const cl = console.log


const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");
const todoItemControl = document.getElementById("todoItem");
const todosArr = [
  {
	todoItem : "javascript",
	id :'1234' 
  }
]
const generateUuid = () => {
    return (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;

        return value.toString(16);
    });
};

const createTodoList = (arr) => {
	let result = '';
	arr.forEach(todo => {
		result += `<li class = "list-group-item" id="${todo.todoItem}">${todo.todoItem}</li>`
	})
	cl(result)
	todoList.innerHTML = result;
}
createTodoList(todosArr)
const  onToAdd = (eve) => {
	eve.preventDefault();
	let newTodo = {
		todoItem : todoItemControl.value,
		todoId : generateUuid()
	}
	todosArr.unshift(newTodo)
	cl(todosArr)
	createTodoList(todosArr)
	todoForm.reset()
}







todoForm.addEventListener("submit", onToAdd)