import { EditTxt } from './cmps/EditTxt.jsx'
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
        // console.log(txt)
        return (
            <section>
                <h1 className="txt-center" >NOTE page</h1>
                <EditTxt onSaveNote={this.onSaveNote}
                    loadNotes={this.loadNotes} />
                    
                <NoteList onSaveNote={this.onSaveNote}
                    onDeleteNote={this.onDeleteNote}
                    loadNotes={this.loadNotes} notes={notes} />

                {/* <NoteTxt /> */}
                {/* <NoteImg />
                <NoteTodos />
                <NoteVideo /> */}

                {/* <NoteAudio>: bonus
             <NoteMap>: bonus */}
            </section>

        )
    }
}
