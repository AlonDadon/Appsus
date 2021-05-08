import { noteService } from './services/note-service.js'
import { NoteList } from './cmps/NoteList.jsx'
import { NoteBtn } from './cmps/NoteBtn.jsx'


export class NoteApp extends React.Component {
    state = {
        type: null,
        notes: null,
        todos: null,
        selectNoteId: null,
        markNotes: null
    }
    componentDidMount() {
        this.loadNotes()
    }
    loadNotes = () => {
        noteService.query()
            .then(notes => {
                this.setState({ notes })
            })
    }
    onDeleteNote = (id) => {
        noteService.deleteNote(id).then(this.loadNotes())
    }
    onAddNote = (state) => {
        noteService.addNote().then(() => {
            this.loadNotes()
        })

    }
    // select to delete notes
    onMarkNotes = (id, isMark) => {
        console.log(id);
        const { markNotes } = this.state.markNotes
        markNotes = this.state.markNotes
        if (isMark) {
            const idx = markNotes.findIndex((noteId) => noteId === id)
            markNotes.splice(idx, 1)
        } else markNotes.push(id)
        this.setState({ markNotes: markNotes })
    }
    onSaveTodos = (state) => {
        noteService.saveTodos(state).then(() => this.loadNotes())
    }

    render() {
        const { txt, notes, todos } = this.state
        return (
            <section>
                <NoteBtn
                    onAddNote={this.onAddNote}
                />

                <NoteList onSaveNote={this.onAddNote}
                    onDeleteNote={this.onDeleteNote}
                    loadNotes={this.loadNotes}
                    notes={notes}
                    todos={todos}
                    onSaveTodos={this.onSaveTodos}
                    updateMarkNotes={this.onMarkNotes}
                />
            </section>

        )
    }
}
