

const gTodos = ['add']
import { utilService } from '../../../app-service/util-service.js'
export const todoService = {
    saveTodo,
    query
}

function query() {
 
    return Promise.resolve(gTodos)
}
function _addTodo(todo) {
  
    const todoToAdd = _createTodo(todo.txt)
    gTodos.unshift(todoToAdd)
    // gTodos.push([])
    // console.log(_createTodo());

}
function _updateTodo(todoToUpdate) {

    const { txt, id } = todoToUpdate
    var todoIdx = gTodos.findIndex((todo) => {
        return todo.id === id;
    })
    const updateTodo = _createTodo(txt, id)
    gTodos.splice(todoIdx, 1, updateTodo)
    // _saveNotesToStorage();
    return Promise.resolve(todoToUpdate)
}

function saveTodo(todo) {
    console.log(todo);
    (todo.id ? _updateTodo(todo) : _addTodo(todo))
    return Promise.resolve()
}

function _createTodo(txt = '', id = utilService.makeId(), isDone) {
    return {
        id: id,
        txt: txt,
        isDone: false
    }
}
function _createTodos(size) {
    for (let i = 0; i < size; i++) {
        gTodos.push(createTodo())
    }
}