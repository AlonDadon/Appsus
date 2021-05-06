import { NotePreview } from 'NotePreview.jsx'

export function NoteList(props) {
    const { onDeleteNote, loadNotes, notes, onSaveNote } = props
    return (
        <section className="note-list-container flex align-center wrap" >
            { notes && notes.map(note =>
                <NotePreview onSaveNote={onSaveNote} onDeleteNote={onDeleteNote} note={note} key={note.id}
                    loadNotes={loadNotes}
                />)}
        </section >
    )

}