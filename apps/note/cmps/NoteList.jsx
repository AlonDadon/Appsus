import { NotePreview } from 'NotePreview.jsx'
import { noteService } from '../services/note-service.js'
import { EditTxt } from './EditTxt.jsx'
export class NoteList extends React.Component {

    state = {
        selectNote: null
    }

    onDeleteNote = (id) => {
        const { loadNotes } = this.props
        noteService.deleteNote(id).then(loadNotes())
    }
    // onUpdateNote = (id) => {
    //     // this.setState(id)
    //     // console.log(id);
    //     this.state.selectNote = id
    //     const { loadNotes } = this.props
    //     loadNotes()
    // }
    // selectNote

    render() {
        const { notes, loadNotes } = this.props
        return (
            // onUpdateNote={this.onUpdateNote}
            <section className="flex align-center column" >
                { notes && notes.map((note, idx) =>
                    <NotePreview onDeleteNote={this.onDeleteNote} note={note} key={note.id}
                        loadNotes={loadNotes}
                    />)}
            </section >
        )
    }
}