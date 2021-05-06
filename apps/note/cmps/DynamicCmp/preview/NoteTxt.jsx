

import { EditNote } from '../EditNote.jsx'
export class NoteTxt extends React.Component {
    state = {
        selectNote: null,
        prevSelect: null
    }

    onToggleEditNote = (id) => {
        this.setState({ selectNote: id })
    }

    render() {
        const { onDeleteNote, loadNotes, onSaveNote } = this.props.props
        const { type, isPinned, info, id } = this.props.props.note
        return (
            <section className="note mb-10 color-dark">
                <p onClick={() => this.onToggleEditNote(id)} >{info.txt}</p>
                <button className="btn" onClick={() => onDeleteNote(id)}>🗑</button>

                { this.state.selectNote && <EditNote id={id}
                    type={type}
                    loadNotes={loadNotes}
                    onSaveNote={onSaveNote}
                    onToggleEditNote={this.onToggleEditNote}
                ></EditNote>}
            </section>

        )
    }
}