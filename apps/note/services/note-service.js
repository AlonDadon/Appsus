import { utilService } from '../../../app-service/util-service.js'
export const noteService = {
    query,
    saveNote,
    deleteNote
}

const gNotes = []
_createNotes(3)

function query() {
    return Promise.resolve(gNotes)
}

function saveNote(note) {
    (note.id ? _updateNote(note) : _addNote(note))
    return Promise.resolve()
}

function _addNote(noteToAdd) {
    const txt = (noteToAdd) ? (noteToAdd).txt : null
    const note = _createNote(txt)
    gNotes.unshift(note)
    gNotes.unshift()
    // _saveNoteToStorage();
}

function _updateNote(noteToUpdate) {
    const { txt, id } = noteToUpdate
    var noteIdx = gNotes.findIndex((note) => {
        return note.id === id;
    })
    const updateNote = _createNote(txt, id)
    gNotes.splice(noteIdx, 1, updateNote)
    // _saveNotesToStorage();
    return Promise.resolve(noteToUpdate)
}

function _createNotes(size) {
    for (let i = 0; i < size; i++) {
        _addNote()
    }
}



function _createNote(txt, id = utilService.makeId()) {
    (txt) ? txt = txt.txt : txt = utilService.makeLorem();
    return {
        id,
        type: 'NoteTxt',
        isPinned: true,
        info: {
            txt,
            // url,
            // title,
            // label: 'How was it:',
            // todos: [
            //     { txt: 'Do that', doneAt: null },
            //     { txt: 'Do this', doneAt: 187111111 }
            // ]
        }
    }
}

function deleteNote(noteId) {
    var noteIdx = gNotes.findIndex(function (note) {
        return noteId === note.id
    })
    gNotes.splice(noteIdx, 1)
    // _saveCarsToStorage();
    return Promise.resolve()
}