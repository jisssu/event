const toDoForm = document.getElementById("toDo-Form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("toDo-List")

let todos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove(); //화면에 출력되지 않게만 해주는 것. li값은 그대로 가져올 수 있음
    todos = todos.filter(todo=> todo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li")
    li.id = newToDo.id ;
    const span = document.createElement("span")
    span.innerText = newToDo.text;  //.text로 text 값만 출력되도록
    const button = document.createElement("button")
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    saveToDos();
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoObj = {   //object 만들기 위한 변수 생성
        text : newToDo,
        id : Date.now()
    }
    toDoInput.value = "";
    todos.push(newToDoObj); //todos array에 obj push
    paintToDo(newToDoObj);  //paintToDo argument로 obj 넣기
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    todos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}