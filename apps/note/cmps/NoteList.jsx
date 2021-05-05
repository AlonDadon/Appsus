import { NotePreview } from 'NotePreview.jsx'

export function NoteList(props) {
    const { onDeleteNote, loadNotes, notes, onSaveNote } = props
    return (
        <section className="flex align-center column" >
            { notes && notes.map(note =>
                <NotePreview onSaveNote={onSaveNote} onDeleteNote={onDeleteNote} note={note} key={note.id}
                    loadNotes={loadNotes}
                />)}
        </section >
    )

}