const { getTodos, setTodos } = require('./todos.js');
function displayTodos(){
    console.log(getTodos().split("\n").map(function(task){ return "-" + task;}).join("\n"));
}
function addTodo(newTask){
    var arrTask = getTodos().split("\n");
    arrTask.push(newTask);
    setTodos(arrTask.join("\n"));
}
function deleteTodo(i){
    var todoArray = getTodos().split("\n");
    todoArray = todoArray.filter(function(arg,index){
        return (i-1 !== index);
    });

    setTodos(todoArray.join("\n"));
}
function updateTodos(updatedTask){
    const index = updatedTask.shift();
    var todoArray = getTodos().split("\n");
    todoArray[index-1] = updatedTask.join(" ");
    setTodos(todoArray.join("\n"));
}

if(process.argv.length > 2){
    const [temp1,temp2,gcdu, ...restOfString] = process.argv;
    if(gcdu === "get"){
        displayTodos();
    }
    else if(gcdu ==="create"){
        addTodo(restOfString.join(" "));
    }
    else if(gcdu==="delete"){
        deleteTodo(restOfString);
    }
    else if(gcdu === "update"){
        updateTodos(restOfString);
    }
}
else
    displayTodos();