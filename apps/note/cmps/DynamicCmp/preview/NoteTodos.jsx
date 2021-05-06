
export class NoteTodos extends React.Component {
    state = {
        selectNote: null,
        prevSelect: null
    }

    onToggleEditNote = (id) => {
        this.setState({ selectNote: id })
    }

    render() {
        // const { onDeleteNote, loadNotes, onSaveNote } = this.props.props
        // const { type, isPinned, info, id } = this.props.props.note
        // console.log(this.onToggleEditNote);
        return (
            <section className="todo mb-10 color-dark">
                <table>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Todo</th>
                            <th>Create at</th>
                            <th>Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Add Todo</td>
                            <td>1.2.2021</td>
                            <td><button>Done</button></td>
                        </tr>

                    </tbody>
                </table>

                {/* <button onClick={() => onDeleteNote(id)}>❌❎</button>
                <p onClick={() => this.onToggleEditNote(id)} >{info.txt}</p>

                { this.state.selectNote && <EditNote id={id}
                    loadNotes={loadNotes}
                    onSaveNote={onSaveNote}
                    onToggleEditNote={this.onToggleEditNote}
                ></EditNote>} */}
            </section>

        )
    }
}