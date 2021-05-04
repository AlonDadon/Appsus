import { EditTxt } from './cmps/EditTxt.jsx'
import { noteService } from './services/note-service.js'
import { NoteList } from './cmps/NoteList.jsx'


export class NoteApp extends React.Component {
    state = {
        notes: null,
        msg: null
    }
    componentDidMount() {
        this.loadNotes()
    }
    loadNotes = () => {
        noteService.query()
            .then(notes => {
                this.setState({ notes })

            })
        // this.state.notes = query()
    }

    render() {
        const { txt, notes } = this.state
        // console.log(txt);
        return (
            <section>
                <h1 className="txt-center" >NOTE page</h1>
                <EditTxt loadNotes={this.loadNotes} />
                <NoteList notes={notes}  />
                
                {/* notelist */}
                {/* notePER(DNYMIC) */}
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
