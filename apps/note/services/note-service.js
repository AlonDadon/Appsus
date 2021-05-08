import { utilService } from '../../../app-service/util-service.js'

export const noteService = {
    query,
    saveNote,
    deleteNote,
    saveTodos,
    addNote
}


const gNotes = []
_createNotes(8)

function query() {
    return Promise.resolve(gNotes)
}

function saveNote(state) {
    // (state.selectNoteId ? _updateNote(note) : _addNote(note))
    return Promise.resolve()
}


function _updateNote(noteToUpdate) {
    const { txt, id, type } = noteToUpdate
    var noteIdx = gNotes.findIndex((note) => {
        return note.id === id;
    })
    const updateNote = _createNote(txt, id)
    gNotes.splice(noteIdx, 1, updateNote)
    return Promise.resolve(noteToUpdate)
}

function _createNotes(size) {
    for (let i = 0; i < size; i++) {
        addNote()
    }
}
function addNote(noteToAdd) {
    const note = _createNote()
    gNotes.push(note)
    return Promise.resolve()
}

function _createNote(txt = '', type = 'NoteTodos') {
    (txt) ? txt = txt.txt : txt = utilService.makeLorem()
    return {
        noteId: utilService.makeId(),
        type,
        isPinned: true,
        info: {
            txt,
            todos: [
                {
                    id: null,
                    txt: '',
                    isDone: false
                }
            ],
        }
    }
}

function deleteNote(noteId) {
    var noteIdx = gNotes.findIndex(function (note) {
        return noteId === note.id
    })
    gNotes.splice(noteIdx, 1)
    return Promise.resolve()
}
function saveTodos(note) {
    const { noteId, todos, todoId, txt } = note
    const noteIdx = getNoteIdx(noteId)

    if (todoId) {
        const todoIdx = getTodoIdx(noteIdx, todoId)
        gNotes[noteIdx].info.todos[todoIdx] = txt
        return Promise.resolve()
    }
   
    const todo = {
        id: utilService.makeId(),
        txt: txt.txt,
        isDone: false
    }
    gNotes[noteIdx].info.todos.push(todo)
    return Promise.resolve()
}

function getNoteIdx(noteId) {
    return gNotes.findIndex((note) => note.noteId === noteId)
}

function getTodoIdx(noteIdx, todoId) {
    return gNotes[noteIdx].info.todos.findIndex((note) => note.todoId === todoId)
}