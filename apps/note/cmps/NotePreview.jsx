
// להפוך אותה לקלאס ולהפוך אותה לקומפוננטה דינמית שפותחת את הוספת טקסט
import { EditTxt } from './EditTxt.jsx'
export function NotePreview(props) {

    const { onDeleteNote,loadNotes} = props
    // console.log(props.getKeys());
    const { type, isPinned, info, id } = props.note
    return (
        <section className="note mb-10 color-dark">
            <button onClick={() => onDeleteNote(id)}>❌❎</button>
            
            <p onClick={() => onUpdateNote(id)} >{info.txt}</p>
            <EditTxt id={id} loadNotes={loadNotes} ></EditTxt>
        </section>

    )
}