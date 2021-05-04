export const noteService = {
    query
}

const gNotes = [
    {
        type: 'NoteText',
        isPinned: true,
        info: {
            txt: 'Fullstack Me Baby!'
        }
    },
    {
        type: 'NoteText',
        isPinned: true,
        info: {
            txt: 'Fullstack Me Baby!'
        }
    },
    {
        type: 'NoteText',
        isPinned: true,
        info: {
            txt: 'Fullstack Me Baby!'
        }
    },
]
function query() {
    return Promise.resolve(gNotes)
}

function createNote() {
    const note = {
        type,
        isPinned: 'note text',
        info: {
            txt,
            url,
            title,
            label: 'How was it:',
            todos: [
                { txt: 'Do that', doneAt: null },
                { txt: 'Do this', doneAt: 187111111 }
            ]
        }
    }
}