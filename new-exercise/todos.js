const fs = require("fs");
const { get } = require("http");
function getTodos(){
    return fs.readFileSync("./todos.txt").toString();
}

function setTodos(newTask){
    fs.writeFileSync("./todos.txt", newTask);
}
module.exports = {
    getTodos,
    setTodos

}
