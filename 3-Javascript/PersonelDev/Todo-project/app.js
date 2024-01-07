//Tüm elementleri Seçmek

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#buton");
const filterInput = document.querySelector("#todoSearch");


let todos = [];




runEvents();

function runEvents() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded",pageLoaded);
    secondCardBody.addEventListener("click", removeTodoToUI);
    clearButton.addEventListener("click", allTodosEveryWhere);
    filterInput.addEventListener("keyup", filter);
}

function filter(e){
    const filterValue = e.target.value.toLowerCase().trim();
    const todoListesi = document.querySelectorAll(".list-group-item");
    if(todoListesi.length>0){
        todoListesi.forEach(function(todo){
            if(todo.textContent.toLowerCase().trim().includes(filterValue)){
                todo.setAttribute("style", "display: block");
            }
            else{
                todo.setAttribute("style","display : none !important");
            }
        })
    }
    else{
        showAlert("warning", "Filtreleme yapmak için en az bir todo olmalıdır")
    }
   
}

function allTodosEveryWhere(){
    const todoListesi = document.querySelectorAll(".list-group-item")
    if(todoListesi.length > 0){
        todoListesi.forEach(function(todo){
            todo.remove();
        });
        //STOREGAN SİLME
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        showAlert("success", "Başarılı bir şekilde silindi")
    }
    else{
        showAlert("warning","Silmek için en az bir todo olmalıdır");
    }
}
function removeTodoStorage(removeToDo){
    // checkTodosFromStorage();
    todos.forEach(function(todo,index){
       if(removeToDo ===todo){
        todos.splice(index, 1);
       }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
    
}

function removeTodoToUI(e){
    if(e.target.className === "fa fa-remove"){
        //EKRANDAN SİLME
        const todo = e.target.parentElement.parentElement;
        todo.remove();
        
        // STORAGE SİLME
        removeTodoStorage(todo.textContent)
        showAlert("success", " todo başariyla silindi")
    }
}

function pageLoaded(){
    checkTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}

function addTodo(e) {

    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") {
        showAlert("warning","Lütfen Boş bırakmayınız")
    }
    else {
        addTodoToUI(inputText);
        addTodoStorage(inputText);
        showAlert("success", "Todo Eklendi");
    }
    // Storge ekleme
    e.preventDefault();
}
function addTodoToUI(newTodo) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";

}

function addTodoStorage(newTodo) {
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
        
    }
}

function showAlert(type, message) {
    // <div class="alert alert-warning mt-3" role="alert">Deneme</div>

    const div = document.createElement("div");
    // div.className = "alert alert-"+type;
    div.className = `alert alert-${type} mt-3`;
    div.textContent = message;


    firstCardBody.insertBefore(div, form);
    setTimeout(function(){
        div.remove();
    },2500);
}


