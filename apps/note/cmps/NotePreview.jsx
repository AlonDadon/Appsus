
// להפוך אותה לקלאס ולהפוך אותה לקומפוננטה דינמית שפותחת את הוספת טקסט
import { EditTxt } from './EditTxt.jsx'
// export function NotePreview(props) {
export class NotePreview extends React.Component {
    state = {
        selectNote: null,
        prevSelect: null
    }

    onToggleEditTxt = (id) => {
        this.setState({ selectNote: id })
    }

    render() {
        console.log(this.state);
        const { onDeleteNote, loadNotes, onSaveNote } = this.props
        const { type, isPinned, info, id } = this.props.note
        return (
            <section className="note mb-10 color-dark">
                <button onClick={() => onDeleteNote(id)}>❌❎</button>
                <p onClick={() => this.onToggleEditTxt(id)} >{info.txt}</p>

                { this.state.selectNote && <EditTxt id={id}
                    loadNotes={loadNotes}
                    onSaveNote={onSaveNote}
                    onToggleEditTxt={this.onToggleEditTxt}
                ></EditTxt>}
            </section>

        )
    }
}