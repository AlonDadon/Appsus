import { NotePreview } from 'NotePreview.jsx'

export function NoteList({ notes }) {
    return (
        <section className="flex align-center column">
            {notes && notes.map((note, idx) => <NotePreview note={note} key={idx} />)}
        </section>
    )

}