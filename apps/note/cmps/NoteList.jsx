import { NotePreview } from 'NotePreview.jsx'

export function NoteList(props) {
    const { notes } = props
    return (
        <section className="note-list-container flex align-center wrap" >
            { notes && notes.map(note =>
                <NotePreview props={props}
                    note={note}
                    key={note.noteId}
                />)}
        </section >
    )

}