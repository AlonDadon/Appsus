import { EditNote } from './cmps/EditNote.jsx'
import { noteService } from './services/note-service.js'
import { NoteList } from './cmps/NoteList.jsx'


export class NoteApp extends React.Component {
    state = {
        notes: null,
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
    onSaveNote = (state) => {
        noteService.saveNote(state).then(() => {
            this.loadNotes()
        })
    }

    render() {
        const { txt, notes } = this.state
        return (
            <section>
                <EditNote onSaveNote={this.onSaveNote}
                    loadNotes={this.loadNotes} />

                <NoteList onSaveNote={this.onSaveNote}
                    onDeleteNote={this.onDeleteNote}
                    loadNotes={this.loadNotes} notes={notes} />
            </section>

        )
    }
}
